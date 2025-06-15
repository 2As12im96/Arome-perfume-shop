import React from 'react'
import { Offer } from './Selling'
import { Link } from 'react-router-dom'

function OfferSection() {
  return (
    <Offer>
        <div className="container">
            <div className="offer-parent">
                <div className="offer-info d-flex justify-content-center align-items-center">
                    <div className="offer-text">
                        <p>LIMITED TIME OFFER</p>
                        <strong>50%</strong>
                        <span className='off'>OFF</span>
                        <span className="link d-block text-center">Shop Now</span>
                    </div>
                </div>
                <Link className='d-block'>
                    <div className="offer-img d-flex justify-content-center align-items-center">
                         <img src="images/2550.avif" className='' alt="" />
                    </div>
                </Link>
            </div>
        </div>
    </Offer>
  )
}

export default OfferSection
