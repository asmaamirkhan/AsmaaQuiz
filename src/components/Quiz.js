/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';

import { Layout, Typography, Radio } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;
const { Title } = Typography;
class Quiz extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      quiz: [],
      v: []
    };
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  componentWillMount() {
    var quizz = require('./tests/' + this.props.code + '.json');

    this.setState({ quiz: quizz, v: new Array(quizz.length).fill(0) }, () => {
      console.log(this.state)
    })

  }

  handleAnswer(e, i) {
    const items = this.state.v;
    items[i] = e.target.value;

    this.setState({
      v: items
    });
    console.log(items)

  }
  render() {
    console.log(this.state)
    return (
      <div>
        {
          this.state.quiz.map((item, key) => {
            return (
              <Content
                style={{
                  margin: '24px 16px',
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
      </div>
    );
  }
}

export default Quiz;
