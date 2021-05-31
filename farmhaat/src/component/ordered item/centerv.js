import React from 'react'
import './stylevd.css';
import coir from '../../assets/logonew.png'

function Centerv() {
    return (
        <div>
                <div className="con">
    <table>
        <tr><td>
            <img src={coir} alt=""/>
            <div className="inf">
                <h2>Coir Brick</h2>
                <small>Price: 200</small>
                <br></br>
            </div></td>
            <td>
               <p className="rp">Ordered Date: 19th April</p> 
            </td>
            <td>
                <p className="pr">Delivery Date: 20th April</p> 
             </td>
        </tr>
        <tr>
            <p className="qw">Quantity:2</p>
        </tr>
        <tr>
            <p className="ad">Adrress: <br></br> 2/827,Vellagoundan Thottam, Ganapathipalayam,Tirupur-5</p>
        </tr>
    
        <tr>
            <p className="sa">Description:<br></br>* It will come in brick form of 5 KG. <br></br>
                * Useful for potting mix, maintain water level.<br></br>
                * Put directly into the water to convert it into powder form.<br></br>
                * Useful for indoor & outdoor potted plants.</p>
           
        </tr>
        <tr>
            <button class="btnss">Feedback</button>
        </tr>
    </table>
</div>
        </div>
    )
}

export default Centerv
