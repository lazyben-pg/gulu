import React from 'react'
import { linkPreClass } from '../classes'

const lc = linkPreClass('gulu-layout')

interface SiderProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const Sider: React.FunctionComponent<SiderProps> = (props) => {
  const { className, ...rest } = props
  return (
    <div className={lc('sider', { extra: className })} {...rest}>
      sider
    </div>
  )
}

export default Sider