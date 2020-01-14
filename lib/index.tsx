import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon'
//import Button from './button'

const clickCheck:React.MouseEventHandler = (e) => {
  console.log('hi')
  console.log(e)
}

function App() {
  return (
    <React.Fragment>
      <Icon name="wechat" onClick={clickCheck}/>
    </React.Fragment>
  )
}

ReactDOM.render(<App></App>, document.querySelector('#root'))
