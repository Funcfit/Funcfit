import React, { useState } from "react";
import "../StyleSheet/loginScreen.css"

const LoginScreen=()=>{

    const [loginPopup,showLoginPopup]=useState("hide")

    const loginAlertPopup=()=>{
        showLoginPopup("showLoginPopup")
        setTimeout(()=>showLoginPopup("hide"),3000)

    }

    return(
        <div className="loginContainer">
            <div className="loginCard">
                <h1>Welcome to Func Fit</h1>
                <input  type='text' placeholder="username" />
                <input  type='password' placeholder="password" />
                {/* <input style={{width:'50%', height:'5%'}} type='text' placeholder="username" />
                <input style={{width:'50%', height:'5%'}} type='password' placeholder="password" /> */}

                <div className="loginButton" onClick={()=>loginAlertPopup()}>Login</div>

                <div className="otherLogins">
                    <div className="google"></div>
                    <div className="meta"></div>

                </div>
                
                <div style={{width:'90%', display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                <a className="dText"> Dont have an account? </a>
                <a className="rText" onClick={()=>alert("new user registered")}> register here</a>
                </div>


                <div className={loginPopup} >
                    <h1>Invalid User Name </h1>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen