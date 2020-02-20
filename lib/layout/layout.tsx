import React, { ReactElement } from 'react'
import { linkPreClass } from '../classes'
import './layout.scss'
import Sider from './sider'

const lc = linkPreClass('gulu-layout')

interface LayoutProps extends React.HtmlHTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  let hasSider = false
  if ((props.children as Array<ReactElement>).length) {
    (props.children as Array<ReactElement>).map((node) => {
      if (node.type === Sider) {
        hasSider = true
      }
    })
  }
  const { className, ...rest } = props
  return (
    <div className={lc('', { extra: [className, hasSider && 'hasSider'].filter(Boolean).join(' ') })} {...rest}>
      {props.children}
    </div>
  )
}

export default Layout