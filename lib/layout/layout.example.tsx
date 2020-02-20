import React, { Fragment } from 'react'
import Layout from './layout'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Sider from './sider'

const LayoutExample: React.FunctionComponent = () => {
  return (
    <Fragment>
      <div>
        <h1>example1</h1>
        <Layout style={{height: 500}} className="hi2">
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </Layout>
      </div>
      <div>
        <h1>example2</h1>
        <Layout style={{height: 500}}>
          <Header></Header>
          <Layout>
            <Sider></Sider>
            <Content></Content>
          </Layout>
          <Footer></Footer>
        </Layout>
      </div>
      <div>
        <h1>example3</h1>
        <Layout style={{height: 500}}>
          <Header></Header>
          <Layout>
            <Content></Content>
            <Sider></Sider>
          </Layout>
          <Footer></Footer>
        </Layout>
      </div>
      <div>
        <h1>example4</h1>
        <Layout style={{height: 500}}>
          <Sider></Sider>
          <Layout>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
          </Layout>
        </Layout>
      </div>
    </Fragment>

  )
}

export default LayoutExample