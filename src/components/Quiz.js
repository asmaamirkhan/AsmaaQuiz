/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';

import { Layout, Typography, Radio, Button, Alert } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;
const { Title } = Typography;
class Quiz extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      quiz: [],
      v: [],
      result: 0,
      showAlert: false
    };
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  componentWillMount() {
    var quizz = require('./tests/' + this.props.code + '.json');
    this.setState({ quiz: quizz, v: new Array(quizz.length).fill("") });
  }

  handleAnswer(e, i) {
    const items = this.state.v;
    items[i] = e.target.value;

    this.setState({
      v: items
    });
  }

  handleCheck = () => {
    let result = 0;
    this.state.v.forEach((item, i) => {
      if (item == this.state.quiz[i].answer) {
        result++;
      }
    })
    this.setState({ showAlert: true, result: result });
  }

  render() {
    return (
      <div>
        {
          this.state.quiz.map((item, key) => {
            return (
              <Content
                style={{
                  margin: '24px 0',
                  padding: 24,
                  background: '#fff',
                  height: 'auto',
                  minHeight: 'auto'
                }}
                key={key}
              >
                <Title level={3}>{key + 1}{")  " + item.question}</Title>

                <Radio.Group
                  id={key} options={item.options}
                  value={this.state.v[key]}
                  onChange={e => this.handleAnswer(e, key)}
                />

              </Content>
            )
          })
        }
        <Button type="primary" onClick={this.handleCheck}>Check Answers!</Button>
        <Alert
          style={{ margin: "30px 0px", display: this.state.showAlert ? "block" : "none" }}
          message="Your note is:"
          description={(this.state.result) + " / " + (this.state.quiz).length}
          type="warning"
          showIcon
        />
      </div>
    );
  }
}

export default Quiz;
