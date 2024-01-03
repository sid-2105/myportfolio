import "./PricingCardStyle.css"
import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
     <h1>Pricing</h1>
     <div className="card-container">
          <div className="card">
               <h3>Premium</h3>
               <span className="bar"></span>
               <p className="btc">NA</p>
               <p>5 days</p>
               <p>Featured</p>
               <p>Responsive Design</p>
               <Link to="/contact" className="btn">
                    PURCHASE NOW
               </Link>
          </div>
          <div className="card">
               <h3>Business</h3>
               <span className="bar"></span>
               <p className="btc">NA</p>
               <p>8 days</p>
               <p>Featured</p>
               <p>Responsive Design</p>
               <Link to="/contact" className="btn">
                    PURCHASE NOW
               </Link>
          </div>
          <div className="card">
               <h3>Basics</h3>
               <span className="bar"></span>
               <p className="btc">NA</p>
               <p>3 days</p>
               <p>Featured</p>
               <p>Responsive Design</p>
               <Link to="/contact" className="btn">
                    PURCHASE NOW
               </Link>
          </div>
     </div>
    </div>
  )
}

export default PricingCard