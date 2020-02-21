import React from 'react'
import { linkPreClass } from '../helpers/classes'

const lc = linkPreClass('gulu-layout')

interface ContentProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const Content: React.FunctionComponent<ContentProps> = (props) => {
  const { className, ...rest } = props
  return (
    <div className={lc('content', { extra: className })} {...rest}>
      content
    </div>
  )
}

export default Content