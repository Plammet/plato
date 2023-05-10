import React from 'react'
import PlanInfo from './../../components/PlanInfo/PlanInfo';
import SideBar from '../../components/SideBar/SideBar';
import UserInfo from '../../components/UserInfo/UserInfo';
import './MainPage.css'
import Nav from '../../components/Nav/Nav';

function MainPage() {
  return (
    <div id='mainPage'>
          <Nav/>
          <SideBar/>
          <PlanInfo/> 
          <UserInfo/>
    </div>
  )
}

export default MainPage