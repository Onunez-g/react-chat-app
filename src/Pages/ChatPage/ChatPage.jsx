import React, {useState, useEffect} from 'react'
import { connect, sendMsg } from "../../Services/socket"
import ChatMenu from "../../Components/ChatMenu"
import ChatContainer from "../../Components/ChatContainer"
import { Redirect } from 'react-router-dom'
import './ChatPage.scss'

const ChatPage = props => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (props.isLogged) {
      connect((msg) => {
        console.log("New message: ", msg);
        setHistory([...history, msg]);
        console.log(history)
      }, props.id);
    }
  });
  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value, props.id);
      event.target.value = "";
    }
  };
  const groupBy = (arr, key) => {
    return arr.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
  return props.isLogged ? (
    <div className="Chat">
      <ChatMenu id={props.id} />
      <ChatContainer id={props.id} chatHistory={history} send={send} />
    </div>
  ) : ( <Redirect to="/login" />)
}

export default ChatPage