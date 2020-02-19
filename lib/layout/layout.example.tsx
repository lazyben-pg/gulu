import React from 'react'
import Layout from './layout'
import Content from './content'
import Footer from './footer'
import Header from './header'

const LayoutExample:React.FunctionComponent = () => {
  return(
    <Layout className='hi22'>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  )
}

export default LayoutExample