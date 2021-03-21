import React from 'react'
import './ChatHistory.scss'
import Message from '../Message';

const ChatHistory = props => {
  console.log(props.chatHistory);
  let messages = props.chatHistory.map((msg, index) => {
    console.log(msg.data);
    let data = JSON.parse(msg.data);
    console.log(data);
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