import React from 'react'
import { linkPreClass } from '../classes'

const lc = linkPreClass('gulu-layout')

const Header:React.FunctionComponent = () => {
  return(
    <div className={lc('header')}>header</div>
  )
}

export default Header