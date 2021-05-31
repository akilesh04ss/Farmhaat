import React from 'react'
import './stylel.css'

function Login() {
    return (
        <div>
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
