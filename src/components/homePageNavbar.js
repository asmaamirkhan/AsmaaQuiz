/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';

import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;

class NavBar extends Component {

  render() {
    return (
      <div>
        <Header>
          <div className="logo logo-nav" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px', float: 'right', position:'sticky' }}
            visible={true}
          >
          <Menu.Item>
              <span>About</span>
            </Menu.Item>
          </Menu>
        </Header>
      </div >
    );
  }
}

export default NavBar;
