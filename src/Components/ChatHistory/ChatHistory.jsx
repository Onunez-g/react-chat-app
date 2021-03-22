import React from 'react'
import './ChatHistory.scss'
import Message from '../Message';

const ChatHistory = props => {
  let messages = (props.chatHistory ?? []).map((data, index) => {
    return (
    <Message key={index} id={props.id} message={data.body} />
  )});
  return (
    <div className="ChatHistory">
      {messages}
    </div>
  )
}

export default ChatHistory