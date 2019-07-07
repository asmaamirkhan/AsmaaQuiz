/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';

import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;

class NavBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      color: 'none'
    }
  }

  render() {
    return (
      <div>
        <Header>
          <div className="logo logo-nav" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px', float: 'right', position:'sticky' }}
            visible={this.state.logged}
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
