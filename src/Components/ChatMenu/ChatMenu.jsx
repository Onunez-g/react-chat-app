import React from 'react'
import ChatMenuItem from '../ChatMenuItem'
import './ChatMenu.scss'

const ChatMenu = props => {
  let user = props.id || "User"
  console.log("Chat Menu props: ", props);
  let chats = props.users.filter(u => u !== props.id).map((u, index) => (
    <ChatMenuItem key={index} to={u} messages={props.messages[u]} selectUser={props.selectUser}/>
  ));
  return (
    <div className="ChatMenu">
      <h2>{user}</h2>
      {/* <input type="text" placeholder="Search"/> */}
      {chats}
    </div>
  )
}

export default ChatMenu