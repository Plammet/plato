import React, { useState } from 'react'
import logo from '../../assets/image/plato.png' 
import './Nav.css';
import Login from '../Login/Login';
import Modal from './../Modal/Modal';

function Nav() {
  const [loginPopup, setLoginPopup] = useState(false) 
  const login = <Login/>

  return (
    <nav>
      <div>
        <img src={logo} alt='Plato' id='mainLogo'/>
        <div className='rightMenu'>회원가입</div>
        <div className='rightMenu'> | </div>
        <button className='rightMenu' onClick={()=>setLoginPopup(true)}>로그인</button>
        {loginPopup && (
          <Modal setModal={setLoginPopup} content={ login }>
          </Modal>
        )}
      </div>
    </nav>
  )
}

export default Nav