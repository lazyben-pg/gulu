import React from 'react'
import { linkPreClass } from '../helpers/classes'

const lc = linkPreClass('gulu-layout')

interface FooterProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const { className, ...rest } = props
  return (
    <div className={lc('footer', { extra: className })} {...rest}>
      {props.children}
    </div>
  )
}

export default Footer