import React from 'react'
import { AccordionStyled } from '../../Home/Accordion/Accordion_styled'


function Accordion_bootstrap() {
  return (
    <AccordionStyled>
        <span className='d-blcok'>GENERAL QUESTIONS HERE</span>
        <h1>Some Frequently Asked Questions.</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How do I choose the right vitamins for me?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>We recommend consulting a healthcare professional to determine which perfume or sent best fit your needs.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Are your vitamins certified and safe to use?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>Yes, all our vitamins are<strong>lab-tested, FDA-compliant, and sourced from trusted manufacturersto</strong> ensure safety and quality.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How long does it take to see results from vitamins?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>Results vary based on individual metabolism and consistency. Most users see noticeable improvements within <strong> 4-6 weeks</strong> of daily use.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Do you offer subscription plans for vitamins?
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>Yes! We offer flexible subscription plans so you never run out of your essential vitamins. Subscribe and save 10%on every order!</p> 
                </div>
                </div>
            </div>
        </div>
    </AccordionStyled>
  )
}

export default Accordion_bootstrap
