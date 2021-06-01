import React from 'react'

function Centeri() {
    return (
        <div>
            <div class="container">
    <div class="text">Request Form</div>
        <form action="#">
            <div class="form-row">
                <div class="input-data">
                    <input type="text" required/>
                    <div class="underline"></div>
                    <label>Name*</label>
                </div>
            </div>
            <div class="form-row">
                <div class="input-data">
                    <input type="email" required/>
                    <div class="underline"></div>
                    <label>Email id*</label>
                </div>
                <div class="input-data">
                    <input type="text" required/>
                    <div class="underline"></div>
                    <label>User id*</label>
                </div>
            </div>
            <div class="form-row">
            <div class="input-data">
                <input type="text" required/>
                <div class="underline"></div>
                <label>Material*</label>
            </div>
                <div class="input-data">
                    <input type="text" required/>
                    <div class="underline"></div>
                    <label>weight*</label>
                </div></div>
            <div class="form-row ">
                <div class="input-data textarea">
                    <textarea class="di" cols="30" rows="10" required></textarea >
                    <div class="underline"></div>
                    <label class="des">Description*</label>
                </div>
            </div>
            <div class="form-row submit-btn">
                <div class="input-data">
                    <div class="inner"></div>
                    <input type="submit" value="Request for pickup"/>
                </div>
            </div>
        </form>
</div>
<marquee behavior="" direction="">
    <h1 className="kud">NOTE: The waste that you sell should not contain plastics and other elctronic waste. The waste should be packed properly before the pickup. </h1>
</marquee>
        </div>
    )
}

export default Centeri
