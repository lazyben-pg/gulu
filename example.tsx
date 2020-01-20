import React from "react"
import ReactDOM from 'react-dom'
import { HashRouter as Router, Link, Route } from 'react-router-dom'

import './example.scss'

import IconExample from './lib/icon/icon.example'
import ButtonExample from './lib/button/button.example'
import DialogExample from './lib/dialog/dialog.example'

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
          <li><Link to='/dialog'>Dialog</Link></li>
        </ul>
      </aside>
      <main>
        <Route path="/icon" component={IconExample} />
        <Route path="/button" component={ButtonExample} />
        <Route path="/dialog" component={DialogExample} />
      </main>
    </div>
  </Router>
  , document.querySelector('#root'))
