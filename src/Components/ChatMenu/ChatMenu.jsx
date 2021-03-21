import React from 'react'
import './ChatMenu.scss'

const ChatMenu = props => {
  let user = props.id || "User"
  return (
    <div className="ChatMenu">
      <h2>{user}</h2>
    </div>
  )
}

export default ChatMenu