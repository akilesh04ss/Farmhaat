import React from 'react'
import './stylec.css';

function Total() {
    return (
        <div>
            <div className="container cart">
            <div class="total">
            <table>
                <tr>
                    <td>Sub-total</td>
                    <td>Rs 400</td>
                </tr>
                <tr>
                    <td>tax</td>
                    <td>Rs 10</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>Rs 410</td>
                </tr>
                <tr><button class="buy">Buy</button></tr>
            </table>
        </div>
        </div>


        </div>
    )
}

export default Total
