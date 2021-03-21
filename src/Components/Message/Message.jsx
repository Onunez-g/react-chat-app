import React, {useState} from 'react'
import './Message.scss'

const Message = props => {
  let messageClass = props.message.from === props.id ? "Message me" : "Message";
  let [stateClass, setClass] = useState(messageClass);
  let [isCropped, setIsCropped] = useState(props.message.msg.length > 256)
  const setToMax = () => {
    let clss = `${messageClass} max`
    setIsCropped(false)
    setClass(clss)
  }
  const seeMore = () => {
    return isCropped ? 
      <p>{props.message.msg.substring(0, 255)}... <button onClick={setToMax}>See more</button></p> 
    : <p>{props.message.msg} </p>
  }
  return (
    <div className={stateClass}>{seeMore()}</div>
  );
}

export default Message