/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import Quiz from './components/Quiz';
import NavBar from './components/homePageNavbar';

import { Layout, Typography } from 'antd';

const { Header, Content, Footer } = Layout;

class QuizPage extends Component {

  render() {
    let params = new URLSearchParams( window.location.search);
    console.log(params.get('code'))
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <NavBar />
        </Header>
        <Content style={{ margin: "20px 80px", background: "#f0f2f5" }}>
          <Quiz code={params.get('code')} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made with love by Asmaa</Footer>
      </Layout>

    );
  }
}
export default QuizPage;
