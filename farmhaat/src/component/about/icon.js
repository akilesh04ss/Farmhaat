import React from 'react'
import seed from '../../assets/seed.svg'
import cog from '../../assets/cog.svg'
import check from '../../assets/check.svg'
import thumb from '../../assets/thumb.svg'
import coin from '../../assets/coins.svg'
import recycle from '../../assets/recycle.svg'
import './stylea.css'

function Icon() {
    return (
        <div>
            <div className="icon">
        
        <a href="#" className="org"><img src={seed} /></a>
        <p className="organic">100% Organic</p>
        <p className="proo">Organic products</p>
        <a href="#" className="ser" ><img src={cog} /></a>
        <p className="vice">Service</p>
        <p className="bes">We give best service</p>
        <a href="#" className="cl"><img src={check} width="70px" /></a>
        <p className="qual">Quality</p>
        <p className="ity"> 100% Quality check</p>
        <a href="#" className="thumb"><img src={thumb}  /></a>
        <p className="prod">Product</p>
        <p className="good">Good and Certified products</p>
        <a href="#" className="coin"><img src={coin} /></a>
        <p className="price">Reasonable Price</p>
        <p className="reason">Consistent quality and price</p>
        <a href="#" className="re"><img src={recycle} /></a>
        <p className="cycle">Waste Recycling</p>
        <p className="best">Best handling of wastes</p>
</div>
        </div>
    )
}

export default Icon
