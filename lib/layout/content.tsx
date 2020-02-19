import React from 'react'
import { linkPreClass } from '../classes'

const lc = linkPreClass('gulu-layout')

const Content:React.FunctionComponent = () => {
  return(
    <div className={lc('content')}>content</div>
  )
}

export default Content