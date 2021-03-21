import React from 'react'
import './LoginContainer.scss'

const LoginContainer = props => {
  return (
    <div className="LoginContainer">
      <h2>Welcome to Realtime chat!</h2>
      <h3>Enter your nickname:</h3>
      <input type="text" value={props.id} onChange={props.fieldChange} placeholder="Write here..."/>
      <button onClick={props.login} >Login</button>
    </div>
  )
}

export default LoginContainer