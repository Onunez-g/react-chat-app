import React from 'react'
import './ChatMenuItem.scss'

const ChatMenuItem = props => {
  let lastMessage = props.messages ? props.messages[props.messages.length - 1]?.body : null;
  let msg = (lastMessage?.msg ?? "").substring(0, 25);
  let from = (lastMessage ?? "")?.from;
  const selectUser = () => {
    props.selectUser(props.to)
  }
  return (
    <div className="Item" onClick={selectUser}>
      <h4>{props.to !== "all" ? props.to : "General"}</h4>
      <p>{`${from ? from + ":" : ""} ${msg}`}</p>
    </div>
  )
}

export default ChatMenuItem