/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';

import {
  FaClipboardList
} from "react-icons/fa";

import 'antd/dist/antd.css';
import './index.css'
import Navbar from './components/homePageNavbar';
import TestTable from './components/TestTable';
import { Layout, Typography, Button, Divider } from 'antd';

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;
class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Navbar />
        </Header>
        <Content >
          <Layout >

            <div id="home-page" style={{ height: '90vh', position: 'relative' }}>
              <div style={{
                background: 'rgba(92, 77, 66, 0.8)', width: '100%', 'flex-direction': 'column', justifyContent: 'center',
                position: 'absolute', display: 'flex', textAlign: 'center', height: '100%'
              }}>
                <Title level={1} style={{ color: 'white', fontSize: '50px', margin: '0 10%' }}>
                  AsmaaQuiz the solution to keep your knowledge up-to-date!
                  <Divider type="horizontal" style={{ height: 3 }} />
                </Title>


                <Text style={{ color: 'white', fontSize: 20 }}>
                  AsmaaQuiz is an online tool developed by&nbsp;
                <a href="https://www.linkedin.com/in/asmaa-mirkhan/">Asmaa</a>
                  &nbsp;to make it easy to check general culture repeatly <br />
                  In another hand it is easy-to-use and open source!
              </Text>
                <div style={{ margin: 10 }}>
                  <Button type="primary" shape="round" size={'large'} href="#quizes">
                    <FaClipboardList size='25' /> <b>Start your first quiz!</b>
                  </Button>
                </div>
              </div>
            </div>
          </Layout>

          <Content style={{ padding: '50px 50px', background: '#fff5e8' }} id="quizes">
            <Title style={{ textAlign: 'center' }} className='asmaaquiz-title'>
              Available Quizes
            </Title>

            <TestTable />
          </Content>

        </Content>
        <Footer style={{ textAlign: 'center' }}>Made with love by Asmaa</Footer>
      </Layout>


    );
  }
}
export default HomePage;
