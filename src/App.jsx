import React, { Component } from "react";
import './App.css';


import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


function test() {
  axios.get('https://99.167.210.241:3030/')
    .then(res => {
      // using setstate causes infinite re-rendering 
      // to avoid it mutate state indirectly to avoid warning
      let msg = res.data
      console.log(msg)
    })
}
test()

class App extends Component{
  render() {
    return(
      <div>
        <BrowserRouter>
        <div>
          Stocks Page Test
        </div>
      
        <div>
          <Button type="">Button</Button>
        </div>

        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">
                Home
                <Link to="/"/>
              </Menu.Item>
              <Menu.Item key="2">
                Login
                <Link to="/login"/>
              </Menu.Item>
              <Menu.Item key="3">
                About me
                <Link to="/code"/>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
              <Sider className="site-layout-background" width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                >
                  <SubMenu key="sub1" icon={<UserOutlined />} title="Browse">
                    <Menu.Item key="1">Game</Menu.Item>
                    <Menu.Item key="2">Stocks</Menu.Item>
                    <Menu.Item key="3">Code Review</Menu.Item>
                    <Menu.Item key="4">Resume</Menu.Item>
                  </SubMenu>
                  {/* <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu> */}
                </Menu>
              </Sider>
        
              <Content  style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>Test2</Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

