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
                <input  type='text' placeholder="email" />
                <input  type='text' placeholder="password" />
                {/* <input style={{width:'50%', height:'5%'}} type='text' placeholder="username" />
                <input style={{width:'50%', height:'5%'}} type='password' placeholder="password" /> */}
                <Link id="RouterNavLink"  to="/home">
                    <div className="flex justify-center align-center bg-blue-400 pt-4 pb-4 pl-8 pr-8 rounded-md">Login</div>
                </Link>

                <div className="otherLogins">
                    <div className="google"><a href='localhost:5000/auth'></a></div>
                    <div className="meta"></div>

                </div>
                
                <div div className="accountMethod">
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