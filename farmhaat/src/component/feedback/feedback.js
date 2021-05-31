import React from 'react'
import './stylef.css';
function Feedback() {
    return (
        <div>
<div className="container">
        <div className="text">Feedback Form</div>
            <form action="#">
                <div className="form-row">
                    <div className="input-data">
                        <input type="text" required/>
                        <div className="underline"></div>
                        <label>Name*</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input type="email" required/>
                        <div className="underline"></div>
                        <label>Email id*</label>
                    </div>
                    <div className="input-data">
                        <input type="text" required/>
                        <div className="underline"></div>
                        <label>User id*</label>
                    </div>
                </div>
                <div className="form-row ">
                    <div className="input-data textarea">
                        <textarea cols="30" rows="10" required></textarea >
                            <div className="underline"></div>
                        <label>Message*</label>
                    </div>
                </div>
                <div className="form-row submit-btn">
                    <div className="input-data">
                        <div className="inner"></div>
                        <input type="submit" value="submit"/>
                    </div>
                </div>
            </form>
    </div>
        </div>
    )
}

export default Feedback
