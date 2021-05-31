import React from 'react'
import  './stylep.css'
import coir from '../../assets/oir.jpg'
function Procard() {
    return (
        <div>
                    <div className="container">
     <div className="card">
         <div className="imgBx">
             <img src={coir} alt="coir brick"/>
         </div>
         <div className="contentBx">
             <h2>Coir Brick</h2>
             <div className="price">
                <h3>Price(Rs/kg) :</h3>
                <span>200.00</span>
            </div>
            <a href="./view.html">View it!</a>
         </div>
     </div>
 </div>
        </div>

    )
}

export default Procard

