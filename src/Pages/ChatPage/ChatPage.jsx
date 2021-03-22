import React, {useState, useEffect} from 'react'
import { connect, sendMsg } from "../../Services/socket"
import ChatMenu from "../../Components/ChatMenu"
import ChatContainer from "../../Components/ChatContainer"
import { Redirect } from 'react-router-dom'
import './ChatPage.scss'
import Http from '../../Services/http'

const ChatPage = props => {
  const [history, setHistory] = useState([]);
  const [messages, setMessages] = useState({});
  const [users, setUsers] = useState([]);
  const [to, setTo] = useState("all");
  useEffect(() => {
    if (props.isLogged) {
      connect((msg) => {
        let data = JSON.parse(msg.data);
        if (data.body.to === props.id) {
          data.body.to = data.body.from;
        }
        setHistory([...history, data]);
      }, props.id);
    }
    console.log("History: ", history);
  });
  useEffect(() => {
    setMessages(groupByTo(history));
    Http.anonymousGet("/clients")
      .then((res => {
        res.unshift('all');
        setUsers(res);
      }))
      .catch(err => console.error(err));
  }, [history])
  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value, props.id, to);
      event.target.value = "";
    }
  };
  const groupByTo = (arr) => {
    return arr.reduce(function(rv, x) {
      let k = x.body.to;
      (rv[k] = rv[k] || []).push(x);
      return rv;
    }, {});
  }
  const selectUser = (user) => {
    setTo(user);
  }
  return props.isLogged ? (
    <div className="Chat">
      <ChatMenu id={props.id} users={users} messages={messages} selectUser={selectUser}/>
      <ChatContainer id={props.id} to={to !== "all" ? to : "General"} chatHistory={messages[to]} send={send} />
    </div>
  ) : ( <Redirect to="/login" />)
}

export default ChatPage