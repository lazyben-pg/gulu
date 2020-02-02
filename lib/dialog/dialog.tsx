import React, { ReactElement, ReactFragment, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import './dialog.scss'
import { Icon } from '../index'
import { linkPreClass } from '../classes'

interface DialogProps {
  visible: boolean
  buttons?: Array<ReactElement>
  onClose: React.MouseEventHandler
  closeOnClickMask?: boolean
}

const lc = linkPreClass('gulu-dialog')

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e)
    }
  }
  const x = props.visible ?
    <React.Fragment>
      <div className={lc('mask')} onClick={onClickMask}></div>
      <div className={lc()}>
        <div className={lc('close')} onClick={onClickClose}><Icon name='close' /></div>
        <header className={lc('header')}>提示</header>
        <main className={lc('main')}>{props.children}</main>
        {
          props.buttons && props.buttons.length > 0 &&
          <footer className={lc('footer')}>
            {props.buttons && props.buttons.map((button, index) =>
              React.cloneElement(button, { key: index })
            )}
          </footer>
        }
      </div>
    </React.Fragment > :
    null
  return (
    ReactDOM.createPortal(x, document.body)
  )
}

Dialog.defaultProps = {
  closeOnClickMask: false
}

const alert = (content: string) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component =
    <Dialog
      visible={true}
      buttons={[<button onClick={onClose}>ok</button>]}
      onClose={onClose}>
      {content}</Dialog>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component, div)
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    yes && yes()
  }
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    no && no()
  }
  const component = (
    <Dialog visible={true}
      buttons={[<button onClick={onYes}>yes</button>, <button onClick={onNo}>no</button>]}
      onClose={onNo}>
      {content}
    </Dialog>)
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component, div)
}

const modal = (content: ReactNode | ReactFragment) => {
  const component = <Dialog onClose={() => {
    close()
  }} visible={true}>{content}</Dialog>
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  return close
}

export { alert, confirm, modal }
export default Dialog