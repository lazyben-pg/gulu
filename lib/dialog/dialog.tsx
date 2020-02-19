import React, { ReactElement, ReactNode } from 'react'
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

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), dialogContainer)
    ReactDOM.unmountComponentAtNode(dialogContainer)
    dialogContainer.remove()
  }
  const component =
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
        close()
        afterClose && afterClose()
      }}>
      {content}
    </Dialog>
  const dialogContainer = document.createElement('div')
  document.body.append(dialogContainer)
  ReactDOM.render(component, dialogContainer)
  return close
}

const alert = (content: string) => {
  const buttons = [<button onClick={() => { close() }}>ok</button>]
  const close = modal(content, buttons)
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close()
    yes && yes()
  }
  const onNo = () => {
    close()
    no && no()
  }
  const buttons = [<button onClick={onYes}>yes</button>, <button onClick={onNo}>no</button>]
  const close = modal(content, buttons, no)
}

export { alert, confirm, modal }
export default Dialog