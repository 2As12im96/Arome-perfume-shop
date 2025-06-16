import React from 'react'
import NavbarOffcanvase from '../Navbar/Navbar'
import { FaqContainer } from './Faq.style'
import { Link } from 'react-router-dom'
import Accordion from './Accordion/Accordion'
import Footer from '../footer/footer'
import AccordionTwo from './Accordion/AccordionTwo'
import Testimonail_logic from './testimonial/Testimonial'
// import Testimonail_logic from './testimonial/testimonial'



function Faq() {
  return (
    <>
        <NavbarOffcanvase/>
        <FaqContainer>
            <nav className='breadcrumb-nav' aria-label="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">FaQ</li>
                    </ol>
                </div>
            </nav>
            <Accordion/>
            <Testimonail_logic/>
            <AccordionTwo/>
        </FaqContainer>
        <Footer/>
    </>
  )
}

export default Faq
