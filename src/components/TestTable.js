/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';

import { Table, Button } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import * as tests from './tests/tests.json';

const { Column } = Table;

class TestTable extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }
    componentDidMount() {
        this.setState({ tests: tests.default });
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Table bordered scroll={{x:400}} dataSource={this.state.tests} style={{ background: 'white' }} rowKey="id">

                    <Column title="#" dataIndex="id" />
                    <Column title="Test Title" dataIndex="name" key="address" />
                    <Column title="#Questions" dataIndex="questionNumber" key="question" />
                    <Column title="Target Skill" dataIndex="type" key="skill" />
                    <Column title="Level" dataIndex="level" key="level" />
                    <Column title=""
                        render={(value, row, index) => {
                            return <Link to={"/quiz?code="+(index+1)}><Button key={index} type="primary" >Solve</Button></Link>
                        }} />

                </Table>
            </div>
        );
    }
}

export default TestTable;
