import React from 'react'
import { linkPreClass } from '../classes'
import './layout.scss'

const lc = linkPreClass('gulu-layout')

interface LayoutProps extends React.HtmlHTMLAttributes<HTMLElement> {

}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { className, ...rest } = props
  return (
    <div className={lc('', { extra: className })} {...rest}>
      {props.children}
    </div>
  )
}

export default Layout