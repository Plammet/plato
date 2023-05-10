import React from 'react'
import './PlanInfo.css'

function PlanInfo() {
  return (
    <div id = 'planInfo'>
        <div className = 'info'>
            <div id='title'>플랜 제목</div>
            <div id='description'>
                플랜에 대한 설명을 적는 공간입니다.
                플랜에 대한 설명을 적는 공간입니다.
                플랜에 대한 설명을 적는 공간입니다.
                플랜에 대한 설명을 적는 공간입니다.
                플랜에 대한 설명을 적는 공간입니다.
                플랜에 대한 설명을 적는 공간입니다.
                플랜에 대한 설명을 적는 공간입니다.
            </div>
            <div id='duration'>2000.01.01 ~ 2000.01.01</div>
            <div id='term'>하루에 1번 / 수치형 </div>
        </div>

        <div className ='joining'>
            <span id='number'>10/20</span>
    
            <br/><br/>
            <div id='join'>참여하기</div>
        </div>
    </div>
  )
}

export default PlanInfo