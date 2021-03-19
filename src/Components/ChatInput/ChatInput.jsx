import React from 'react'
import './ChatInput.scss'

const ChatInput = props => {
  return (
    <div className="ChatInput">
      <input onKeyDown={props.send} placeholder="Type a message, Hit Enter to send..."/>
    </div>
  )
}

export default ChatInput