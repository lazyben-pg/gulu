import React, { useState } from 'react'
import Dialog from './dialog'

const DialogExample: React.FunctionComponent = () => {
  const [x,setX] = useState(false)
  return (
    <React.Fragment>
      <button onClick={()=>setX(!x)}>click</button>
      <Dialog visible={x}><div>hi</div></Dialog>
    </React.Fragment>
  )
}

export default DialogExample