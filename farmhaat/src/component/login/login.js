import React from 'react'
import './stylel.css'
import bk from '../../assets/bk.gif'

function Login() {
    return (
        <div>
            <div className="back">
                <img className="back" src={bk} />
            </div>
        <form className="box" action="" method="POST">
            <h1>Login</h1>
            <input type="text" name="" value="" placeholder="Username"/>
            <input type="password" name="" value="" placeholder="Password"/>
            <p className="sign">New user ?</p>
    <input type="button"  value="Sign up" onclick="window.location='./register.html'"/>
    <input type="Submit" name="" value="Login"/>
    </form>

        </div>
    )
}

export default Login
