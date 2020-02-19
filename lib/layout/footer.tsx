import React from 'react'
import { linkPreClass } from '../classes'

const lc = linkPreClass('gulu-layout')

const Footer:React.FunctionComponent = () => {
  return(
    <div className={lc('footer')}>footer</div>
  )
}

export default Footer