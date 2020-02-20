import React from 'react'
import { linkPreClass } from '../classes'

const lc = linkPreClass('gulu-layout')

interface HeaderProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const { className, ...rest } = props
  return (
    <div className={lc('header', { extra: className })} {...rest}>
      header
    </div>
  )
}

export default Header