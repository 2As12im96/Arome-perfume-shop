import React from 'react'
import { AccordionStyled } from './Accordion_styled'



function Accordion_bootstrap_second() {
  return (
    <AccordionStyled>
        <span className='d-blcok'>BASIC QUESTIONS HERE</span>
        <h1>Some Frequently Asked Questions.</h1>
        <div className="accordion" id="accordionSecondExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                    What payment methods do you accept?
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionSecondExample">
                <div className="accordion-body">
                    <p>We accept credit/debit cards, PayPal, and other major payment methods.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Do you ship internationally?
                </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionSecondExample">
                <div className="accordion-body">
                    <p>Yes, we ship to most countries. Shipping costs and delivery times vary by location.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    Can I cancel my order after placing it?
                </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionSecondExample">
                <div className="accordion-body">
                    <p>Contact customer support as soon as possible. Changes or cancellations depend on the order status.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    At what age should you take vitamins?
                </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionSecondExample">
                <div className="accordion-body">
                    <p>Inform your customers about your brand. Make announcements, describe a product, or welcome customers to your store.</p> 
                </div>
                </div>
            </div>
        </div>
    </AccordionStyled>
  )
}

export default Accordion_bootstrap_second
