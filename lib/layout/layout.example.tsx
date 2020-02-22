import React, { Fragment } from 'react'
import Layout from './layout'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Sider from './sider'
import './layout.example.scss'

const LayoutExample: React.FunctionComponent = () => {
  return (
    <Fragment>
      <div>
        <h1>example1</h1>
        <Layout style={{height: 300, width: 500}} className="hi2">
          <Header className='header-example'>header</Header>
          <Content className='content-example'>content</Content>
          <Footer className='footer-example'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>example2</h1>
        <Layout style={{height: 300, width: 500}}>
          <Header className='header-example'>header</Header>
          <Layout>
            <Sider className='sider-example'>sider</Sider>
            <Content className='content-example'>content</Content>
          </Layout>
          <Footer className='footer-example'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>example3</h1>
        <Layout style={{height: 300, width: 500}}>
          <Header className='header-example'>header</Header>
          <Layout>
            <Content className='content-example'>content</Content>
            <Sider className='sider-example'>sider</Sider>
          </Layout>
          <Footer className='footer-example'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>example4</h1>
        <Layout style={{height: 300, width: 500}}>
          <Sider className='sider-example'>sider</Sider>
          <Layout>
            <Header className='header-example'>header</Header>
            <Content className='content-example'>content</Content>
            <Footer className='footer-example'>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </Fragment>

  )
}

export default LayoutExample