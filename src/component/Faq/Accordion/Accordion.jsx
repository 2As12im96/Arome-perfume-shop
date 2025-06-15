import React from 'react'
import { AccordionContainer } from '../../Home/Accordion/Accordion_styled'
import { Link } from 'react-router-dom'
import Accordion_bootstrap from './Accordion_bootstrap'

function Accordion() {
    return (
      <AccordionContainer>
          <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                      <div className="accordion_img">
                          <img src="images/1443.webp"  alt="" />
                          <div className="ads d-flex justify-content-center align-items-center position-absolute">
                                <div className="ads-info d-flex align-items-center">
                                    <div className="ads-text">
                                        <h5>Still Have Questions?</h5>
                                        <p>Feel free to ask any questions you have!</p>
                                    </div>
                                    <div className="ads-btn">
                                        <button><Link to='/'>HERE TO HELP</Link></button>
                                    </div>
                                </div>
                          </div>
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
