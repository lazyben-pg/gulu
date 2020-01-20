import React from 'react'
import './dialog.scss'
import { Icon } from '../index'

interface DialogProps {
  visible: boolean
}

const linkPreClass = (preName: string) => {
  return function linkClass(name?: string) {
    return [preName, name].filter(Boolean).join('-')
  }
}

const lc = linkPreClass('gulu-dialog')

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  return (
    props.visible ?
      <React.Fragment>
        <div className={lc('mask')}></div>
        <div className={lc()}>
          <div className={lc('close')}><Icon name='close' /></div>
          <header className={lc('header')}>提示</header>
          <main className={lc('main')}>{props.children}</main>
          <footer className={lc('footer')}>
            <button>ok</button>
            <button>cancel</button>
          </footer>
        </div>
      </React.Fragment > :
      null
  )
}

export default Dialog