import React from 'react'

const Message = ({message})=>(
  message
  ? <span classname='message'>{message}</span>
  : null
)

export default Message
