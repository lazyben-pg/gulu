import React, { ReactElement } from 'react'
import './layout.scss'
import Sider from './sider'
import { linkPreClass } from '../helpers/classes'

const lc = linkPreClass('gulu-layout')

interface LayoutProps extends React.HtmlHTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  /* 这里出现了 let 赋值，所以进行改写
  let hasSider = false
  if ((props.children as Array<ReactElement>).length) {
    (props.children as Array<ReactElement>).map((node) => {
      if (node.type === Sider) {
        hasSider = true
      }
    })
  }
  */
  const childrenAsArray = (props.children as Array<ReactElement>)
  const hasSider = 'length' in childrenAsArray &&
    childrenAsArray.reduce((result, node) => result || node.type === Sider, false)
  const { className, ...rest } = props
  return (
    <div className={lc({'':true, 'hasSider':hasSider}, { extra: className })} {...rest}>
      {props.children}
    </div>
  )
}

export default Layout