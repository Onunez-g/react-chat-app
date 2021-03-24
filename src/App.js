import {useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ChatPage from './Pages/ChatPage'
import LoginPage from './Pages/LoginPage'
import './App.css'

function App() {
  let [id, setId] = useState("")
  let [isLogged, setLogged] = useState(false)

  const login = (event) => {
    console.log(id);
    if (id) {
      setLogged(true);
    }
    event.preventDefault();
  }
  const fieldChange = (event) => {
    setId(event.target.value);
  }
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" render={(props) => (<ChatPage id={id} isLogged={isLogged}/>)} />
        <Route exact path="/login" render={(props) => (<LoginPage id={id} login={login} fieldChange={fieldChange} isLogged={isLogged} />)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
