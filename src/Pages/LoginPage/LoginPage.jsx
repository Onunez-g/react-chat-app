import React from 'react'
import { Redirect } from 'react-router-dom'
import LoginContainer from '../../Components/LoginContainer'
import './LoginPage.scss'

const LoginPage = props => {
  return !props.isLogged ? (
    <LoginContainer id={props.id} login={props.login} fieldChange={props.fieldChange} />
  ) : <Redirect to="/" />
}

export default LoginPage