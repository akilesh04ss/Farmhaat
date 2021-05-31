import React from 'react'
import './styler.css'
import plant from '../../assets/img.gif';
function Register() {
    return (
        <div>
             <div className="container">
        <div className="form">
            <div className="heading">
                <h1>Registration Form</h1>
            </div>
            <div className="wrap">
                <div className="f1">
                    <label>First Name*</label>
                    <input type="text" required/>
                    <span className="focus-input"></span>
                </div>
                <div class="f2">
                    <label>Second Name*</label>
                    <input type="text" required/>
                    <span className="focus-input"></span>
                </div>
            </div>
            <div className="wrap2">
                <label>Username*</label>
                <input type="text" required/>
                <span className="focus-input2"></span>
            </div>
            <div className="wrap">
                <div className="f1">
                <label>E-mail*</label>
                <input type="email" required/>
                <span className="focus-input"></span></div>
                <div className="f2">
                <label>Phone*</label>
                <input type="text" required/>
                <span className="focus-input"></span></div>
            </div>
            <div className="wrap2">
                <label>Address*</label>
                <input type="text" required/>
                <span className="focus-input2"></span>
            </div>
            <div className="wrap2">
                <label>Password*</label>
                <input type="password" required/>
                <span className="focus-input2"></span>
            </div>
            <div className="wrap2">
                <label>Confirm password*</label>
                <input type="password" required/>
                <span className="focus-input2"></span>
            </div>
            <button className="btn">Register</button>
        </div>      
        <div className="image">
        <img  className="img" src={plant} alt="image"/></div>
    </div>
    </div>
    )
}

export default Register
