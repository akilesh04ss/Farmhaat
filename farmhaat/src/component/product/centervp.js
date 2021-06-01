import React from 'react'
import './stylev.css'
import coir from '../../assets/oir.jpg'
function Centervp() {
    return (
        <div>
                <div className="con">
    <table>
        <tr><td>
            <img src={coir} alt=""/>
            <div className="inf">
                <h1 className="oin">Coir Brick</h1>
                <small className="pt">Price(Rs/Kg): 200</small>
                <br></br>
                <p className="qt">Quantity(kg) :</p>
                <input type="number" value="1" min="1"/>
            </div>
            </td>
            </tr>
    
        <tr>
            <p class="sa"><a className="op">Description:</a><br></br>* It will come in brick form of 5 KG. <br></br>
                * Useful for potting mix, maintain water level.<br></br>
                * Put directly into the water to convert it into powder form.<br></br>
                * Useful for indoor & outdoor potted plants.</p>
           
        </tr>
        <tr>
            <button class="btnss">ADD TO CART</button>
        </tr>
    </table>
</div>
        </div>
    )
}

export default Centervp
