import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/image/plato.png'
import thumbnail from '../../assets/image/thumbnail.png'
import Google from './loginAPIs/Google';
import Naver from './loginAPIs/Naver';

function Login() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailChange = (e) => {
        setEmail(e.currentTarget.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.currentTarget.value)
    }

    const loginClicked = () => {
        console.log("login button clicked")

    }

  return (
    <div id='loginComponent'>
        <img src={logo} alt='Plato' id='mainLogo' style={{height : '80px'}}/>
        <form id='login' onSubmit={loginClicked} action="/main">
            <input type = 'email' value={Email} onChange={onEmailChange}></input><br/>
            <input type = 'password' value={Password} onChange={onPasswordChange}></input><br/>
            <button type='submit'>로그인</button><br/>
        </form>
        <br/>
        <button id='signUp'>
            <div>
                <img src={thumbnail} alt='Plato' id='thumbnail'/>
                회원가입
            </div>
        </button>
        
        <Google/>
        <Naver/>
    </div>
  )
}

export default Login