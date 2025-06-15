import React from 'react'
import { AboutContainer, AboutContent, AboutWatched } from './About_style'
import NavbarOffcanvase from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../footer/footer'
import Counter from './Counter'
import Testimonail_logic from '../Home/testimonial/Testimonail_logic'
import Accordion from './Accordion/Accordion'


function About() {
  return (
    <>
        <NavbarOffcanvase/>
        <AboutContainer>
            <nav className='breadcrumb-nav' aria-label="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">About us</li>
                    </ol>
                </div>
            </nav>
            <div className="container">
                <AboutContent>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="about-img">
                                    <img src="images/2151623430_copy.webp" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="about-info">
                                    <span>WHO WE ARE</span>
                                    <h1>Arome<sup>®</sup> was founded belief that Perfect Perfume is more than just a necessity.</h1>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>
                                    <button><Link to='/Shop'>SHOP NOW</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AboutContent>
                <Counter/>
                <Testimonail_logic/>
                <AboutWatched>
                    <div className="container">
                        <div className="row parentRow">
                            <div className="col-lg-5 col-md-5 col-sm-12">
                                <div className="about-parent-info d-flex justify-contnet-center align-items-center ">
                                    <div className="about-watched-info">
                                        <span>WHY CHOOSE US</span>
                                        <h1>Fast, Reliable, and Committed to Your Satisfaction.</h1>
                                        <p>Our team consists of highly skilled professionals with extensive training and certifications, ensuring top-quality service. We've been committed to excellence since the very beginning.</p>
                                        <button><Link to='/Shop'>SHOP NOW</Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="about-watched-img once">
                                            <img src="images/1443.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="about-watched-img">
                                            <img src="images/woman%20spray%201.webp" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AboutWatched>
                <Accordion/>
            </div>
        </AboutContainer>
        <Footer/>
    </>
  )
}

export default About
