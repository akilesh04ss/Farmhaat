import React from 'react'
import './stylec.css'
import coir from '../../assets/oir.jpg'

function Cartlist() {
    return (
        <div>
            <div className="container cart">
        <table>
            <tr>
                <th>Product</th>
                <th className="quan">Quantity</th>
                <th className="sub">Amount</th>
            </tr>
            <tr>
                <td>
                    <div className="info">
                        <img src={coir} />
                        <div className="con">
                            <p>Coir Brick</p>
                            <small>Price(Rs/kg): 200</small>
                            <br></br>
                            <a href="#">Remove</a>
                        </div>
                    </div>
                </td>
                <td className="inp"><input type="number" value="1" min="1"/>

                </td>
                <td className="pr">200</td>
            </tr>
            <tr>
        <div className="line"></div>
    <td>
                    <div classname="info">
                        <img className="toh" src={coir} />
                        <div className="ten">
                            <p>Coir Brick</p>
                            <small>Price(Rs/kg): 200</small>
                            <br></br>
                            <a href="#">Remove</a>
                        </div>
                    </div>
                </td>
                <td className="inpu"><input type="number" value="1" /></td>
                <td class="pri">200</td>
            </tr>
        </table> 
        </div>
        </div>
    )
}

export default Cartlist
