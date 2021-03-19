import React, {useState} from 'react'
import './Message.scss'

const Message = props => {
  let temp = JSON.parse(props.message);
  const [msg] = useState(temp);
  return (
    <div className="Message">{msg.body}</div>
  );
}

export default Message