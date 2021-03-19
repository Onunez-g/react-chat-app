import { connect, sendMsg } from "./Services/socket"
import Header from "./Components/Header/Header"
import ChatHistory from './Components/ChatHistory/ChatHistory'
import ChatInput from './Components/ChatInput/ChatInput'
import {useState, useEffect} from 'react'


function App() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New message: ", msg);
      setHistory([...history, msg]);
      console.log(history)
    })
  });
  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  };
  return (
    <div className="App">
      <Header/>
      <ChatHistory chatHistory={history} />
      <ChatInput send={send} />
    </div>
  );
}

export default App;
