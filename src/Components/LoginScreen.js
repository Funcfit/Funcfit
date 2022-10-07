import { React, useState } from "react";
import { Link } from "react-router-dom";
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
                <h1 className="formTitle">Welcome to Func Fit</h1>
                <input  type='text' placeholder="username" />
                <input  type='password' placeholder="password" />
                {/* <input style={{width:'50%', height:'5%'}} type='text' placeholder="username" />
                <input style={{width:'50%', height:'5%'}} type='password' placeholder="password" /> */}

                <div className="loginButton" onClick={()=>loginAlertPopup()}>Login</div>

                <div className="otherLogins">
                    <div className="google"></div>
                    <div className="meta"></div>

                </div>
                
                <div div classname="accountMethod">
                <a className="dText"> Dont have an account? </a>
                <Link to="/register">
                    <a className="rText"> register here</a>
                </Link>
                </div>


                <div className={loginPopup} >
                    <h1>Invalid User Name </h1>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen