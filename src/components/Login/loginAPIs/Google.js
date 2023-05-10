import React from 'react'
import  {  GoogleOAuthProvider, GoogleLogin  }  from  '@react-oauth/google' ;

function Google() {

    return (
        < GoogleOAuthProvider 
            clientId = "9849998633-ls7jhsrnpesevt7k9lpvehujkbnnk3nm.apps.googleusercontent.com" >
            
            <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap
            />
        </GoogleOAuthProvider>
    )

}

export default Google