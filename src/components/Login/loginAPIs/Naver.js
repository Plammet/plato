import { useEffect } from "react";

function Naver(props) {
    const { naver } = window;
    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
        clientId: 'bS0LURBa98XPeR4wq4Me',
        callbackUrl: 'http://localhost:3000/naverLogin',
        isPopup: false, 
        loginButton: { color: 'white', type: 3, height: '45'}, 
        });
        naverLogin.init();
    };
    
    useEffect(() => {
        initializeNaverLogin();
    }, []);
    
    return (
        <div id='naverIdLogin' style={{margin : '10px 10px'}} />
    )
}

export default Naver;