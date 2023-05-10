import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './StartPage.css'
import Login from '../../components/Login/Login';

function StartPage() {
    const opacityAnimation = useSpring({
        from : { opacity : 0 },
        to : { opacity : 1 },
        delay : 700
    });

    const backAnimation = useSpring({
        from : { opacity : 0.5, x : -1000 },
        to : { opacity : 1, x : 0 },
    });

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
    <div>
        <animated.div style={opacityAnimation} id='left'>
            <img src = "/checklist1.png" alt= 'checklist' style={{height : '80px'}}/>
            <div style={{ fontSize: '3em'}}> Plan Together </div>
            함께해서 더 즐거운 계획
        </animated.div>
        <animated.div style={opacityAnimation} id='right'>
            <Login/>
        </animated.div>
        <animated.div style={backAnimation} id='background'></animated.div>
    </div>
  )
}

export default StartPage