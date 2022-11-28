import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import "../StyleSheet/registerScreen.css"

const RegisterScreen = () => {
    const [registerPopup,showRegisterPopup]=useState("hide")

    const registerAlertPopup=()=>{
        showRegisterPopup("showRegisterPopup")
        setTimeout(()=>showRegisterPopup("hide"),3000)

    }

  return (
    <div className='registerContainer'>
        <div className='registerCard'>
            <h1 className='formTitle'>Register to Func Fit</h1>
            <input  type='email' placeholder="email" />
            <input  type='text' placeholder="username" />
            <input  type='password' placeholder="password" />
            <input  type='password' placeholder="confirm password" />

            <div className="registerButton" onClick={()=>registerAlertPopup()}>register</div>

            <div classname="accountMethod">
                <a className="dText"> Alreay have an account?  </a>
                <Link to="/login">
                    <a className="rText"> login here</a>
                </Link>
            </div>
            <div className={registerPopup} >
                <h1>Invalid credentials</h1>
            </div>
        </div>
    </div>
  )
}

export default RegisterScreen