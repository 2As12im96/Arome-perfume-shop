import React from 'react'
import { AccordionContainer } from './Accordion_styled'
import Accordion_bootstrap from './Accordion_bootstrap'


function Accordion() {
  return (
    <AccordionContainer>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="accordion_img">
                        <img src="images/woman%20spray%201.webp"  alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <Accordion_bootstrap/>
                </div>
            </div>
        </div>
    </AccordionContainer>
  )
}

export default Accordion
