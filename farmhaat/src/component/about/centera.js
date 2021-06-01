import React from 'react'
import './stylea.css';
import mis from '../../assets/grow1.png'
import vis from '../../assets/prepare1.png'
import plant from '../../assets/plant.gif'

function Centera() {
    return (
        <div>
             <div className="our">
         <p>Profile</p>
          <div><img src={mis} alt="Mision" className="mis"/>
         <p className="misi">MISSION</p>
                <p className="enter">To provide 100% pure and organic products and to make the consumer satisfied. To be a globally competitive producer.</p></div>
            <div><img src={vis}alt="Vision" className="vis"/>
         <p className="visi">VISION</p>
         <p className="venter">To expand the company and setup branches allover the parts of world. To handle al knds of waste in an effective way with 0% wastage.</p>
          </div>    
            <div className="profile">
        <p>Our organization was set up to provide objective information about the use of wastes for the benefit of the environment. 
        We are the notable Organic manure Supplier and Manufacturers. We are engaged in manufacturing, supplying, wholesaling and exporting quality assured range of Organic manure. 
        The fertilizers are ideal for soil improvement, optimizing crop yields and making plants healthier in an eco-friendly manner while reducing the use of any chemical fertilizer.
        Our company's main principle is proper waste disposal.We collect the wastes directly from the  farms. We use that wastes to produce manures,Coir bricks,compost,etc...
        </p><br></br>
    <p>Our products are accessible with an assurance of the best quality and standards as per fertilizer control and are widely used for all crops for agriculture, horticulture, plantation crops, nurseries, fruits and vegetables.
         We are able to deliver our products in bulk and small quantities, right within the specified time frame.Organic manure has become a wide component of agri-business models across the  country with very low initial investment and we are the best Organic manure producers.
The company is backed by the advanced manufacturing unit, which is spread over an area of 5 acres. 
Our infrastructure comprises of a well equipped Processing unit and a spacious Warehousing facility.
        To ensure that our products are rich in quality and effective, the qualified team supervises the entire production, testing, and packaging processes.</p>
    </div>
     <div ><img className="imge" src={plant} alt="" /></div>
</div>    
        </div>
    )
}

export default Centera
