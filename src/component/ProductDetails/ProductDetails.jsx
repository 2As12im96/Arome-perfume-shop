import React from 'react'
import NavbarOffcanvase from '../Navbar/Navbar'
import Footer from '../footer/footer'
import { ProductDetailsContainer } from './ProductDetails.style'
import AccordionTwo from './Accordion/AccordionTwo'
import Testimonial from './testimonial/Testimonial'
import DetailParent from './Detail/Detail'

function ProductDetails() {
  return (
    <>
        <NavbarOffcanvase/>
        <ProductDetailsContainer>
            <div className="container">
                <DetailParent/>
                <div className="first-content mt-5">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="child-img">
                                <img src="/images/1443.webp" className='img-fluid rounded' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="child-info mt-5 ms-5">
                                <h2 className='mt-5 mb-4'>Why Choose Us?</h2>
                                <p className='mt-3 mb-5'>We believe you get out what you put in —
                                that’s why our products are made with the highest standards of quality.</p>
                                <h5 className='mt-5'>Premium Quality</h5>
                                <p className='mb-5'>Showcase your high-quality vitamins and supplements with a clean, professional design that builds trust.</p>
                                <h5>Trust & Transparency</h5>
                                <p>Highlight ingredients, benefits, and certifications clearly, ensuring confidence in every purchase.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Testimonial/>
                <AccordionTwo/>
            </div>
        </ProductDetailsContainer>
        <Footer/>
    </>
  )
}

export default ProductDetails
