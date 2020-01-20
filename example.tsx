import React from "react"
import ReactDOM from 'react-dom'
import { HashRouter as Router, Link,Route } from 'react-router-dom'

import Exampleicon from './lib/icon/exampleicon'
import Examplebutton from './lib/button/examplebutton'

ReactDOM.render(
  <Router>
    <header>
      <div className='logo'>
        gulugulu
      </div>
    </header>
    <div>
      <aside>
        <h2>组件</h2>
        <ul>
          <li><Link to='/icon'>Icon</Link></li>
          <li><Link to='/button'>Button</Link></li>
        </ul>
      </aside>
      <main>
        <Route path="/icon" component={Exampleicon}/>
        <Route path="/button" component={Examplebutton}/>
      </main>
    </div>
  </Router>
  , document.querySelector('#root'))
