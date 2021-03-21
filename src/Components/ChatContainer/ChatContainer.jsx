import React from 'react'
import ChatHistory from '../ChatHistory/ChatHistory'
import ChatInput from '../ChatInput/ChatInput'
import Header from '../Header'
import './ChatContainer.scss'

const ChatContainer = props => {
  return (
    <div className="ChatContainer">
      <Header name={props.to}/>
      <ChatHistory id={props.id} chatHistory={props.chatHistory} />
      <ChatInput send={props.send} />
    </div>
  )
}

export default ChatContainer