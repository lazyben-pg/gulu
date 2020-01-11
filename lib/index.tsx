import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon'
//import Button from './button'

function App() {
  return (
    <React.Fragment>
      <Icon name="wechat" />
      <Icon name="alipay" />
    </React.Fragment>
  )
}

ReactDOM.render(<App></App>, document.querySelector('#root'))
