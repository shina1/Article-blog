import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link} from 'react-router-dom'
// import { Anchor } from 'antd';

// const { Link } = Anchor;

const { Header, Content, Footer } = Layout;


const CustomLayout = (props) => {
    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            {new Array(3).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
            {/* <Menu.Item key={4}>  </Menu.Item> */}
          </Menu>
          
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to='/'>List</Link></Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
             {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    )
}

export default CustomLayout
  




