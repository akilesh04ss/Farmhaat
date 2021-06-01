import React from 'react';
import './styleoi.css'
import coir from '../../assets/oir.jpg' 
function Centero(){
 return(
 <div>
    <div className="container cart">
        <table>
            <tr>
                <th>Product</th>
                <th class="dd"> Delivery Date</th>
                <th class="price">Price</th>
            </tr>
            <tr>
                <td>
                    <div class="info">
                        <img src={coir} />
                        <div>
                            <br></br>
                            <p className="bri">Coir Brick</p>
                        </div>
                    </div>
                </td>
                <td className="rs">Rs 200</td>
                <td className="pr">20th April</td>
                <td className="a"><a href="./viewdetials.html">View details</a></td>
            </tr>
            <div className="line"></div>
            <tr>
                <td>
                    <div className="info">
                        <img src={coir} ></img>
                        <div>
                            <br></br>
                            <p className="bri">Coir Brick</p>
                        </div>
                   </div>
                   
                </td>
                <td className="rs">Rs 200</td>
                <td className="pr">20th April</td>
                <td className ="view"><a href="./viewdetials.html" className="view">View details</a></td>
            </tr>
        </table>
    </div>
    <div className="containerc">
        <h2 className="sim">Similar Products</h2>
        <div className="card">
            <div className="imgBx">
                <img src={coir} alt="coir brick" />
            </div>
            <div className="contentBx">
                <h2>Coir Brick</h2>
               <a href="#">view it!</a>
            </div>
        </div>
    </div>
    </div>)
}
export default Centero;