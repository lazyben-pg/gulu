import React, { useState } from 'react'
import Dialog, { alert, confirm, modal } from './dialog'

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false)
  const [y, setY] = useState(false)
  const openModal = () => {
    const close = modal(<h1>hihao
      <button onClick={() => close()}>close</button>
    </h1>)
  }
  return (
    <React.Fragment>
      <div>
        <h2>example1</h2>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog visible={x}
          buttons={
            [
              <button onClick={() => setX(false)}>ok</button>,
              <button onClick={() => setX(false)}>cancel</button>
            ]}
          onClose={() => setX(false)}
        >
          <div>example1</div>
        </Dialog>
      </div>
      <div>
        <h2>example2</h2>
        <button onClick={() => setY(!y)}>click</button>
        <Dialog visible={y} buttons={
          [
            <button onClick={() => setY(false)}>ok</button>,
            <button onClick={() => setY(false)}>cancel</button>
          ]}
          onClose={() => setY(false)}
          closeOnClickMask={true}
        >
          <div>example2</div>
        </Dialog>
      </div>
      <div>
        <h2>example3</h2>
        <button onClick={() => alert('example3')}>alert</button>
        <button onClick={() => confirm('example3', () => { console.log('yes') }, () => { console.log('no') })}>confirm</button>
        <button onClick={openModal}> modal</button>
      </div>
    </React.Fragment>
  )
}

export default DialogExample