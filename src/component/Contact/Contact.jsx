import React from 'react'
import NavbarOffcanvase from '../Navbar/Navbar'
import Footer from '../footer/footer'
import { ContactContainer } from './Contact.style'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
      <NavbarOffcanvase/>
      <ContactContainer>
        <nav className='breadcrumb-nav' aria-label="breadcrumb">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">contact us</li>
                </ol>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="contact-form">
                        <form action="">
                            <span>
                                <input type="text" name='name' placeholder='Name:' className='form-control'  required/>
                            </span>
                            <span>
                                <input type="email" name='email' placeholder='Email:' className='form-control' required/>
                            </span>
                            <span>
                                <input type="text" name='phone number' placeholder='phone number:' className='form-control' required/>
                            </span>
                            <span>
                                <textarea name="message" id="message" placeholder='message' className='form-control'></textarea>
                            </span>
                            <button className='rounded'>SEND NOW</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="contact-details">
                        <h1>Keep In Touch with Us</h1>
                        <p>We do not sell product from our corporate headquarters in New York City. If you want to visit please reach out to our customer service team first.</p>
                        <span className='d-block text-parent'>
                            <strong>Visit us:</strong>
                            <span className='d-block'>Sydney road, Billboard Street 2219-11C</span>
                        </span>
                        <span className='d-block text-parent'>
                            <strong>Email us:</strong>
                            <span className='d-block'>aromesupport@mail.com</span>
                        </span>
                        <span className='d-block text-parent'>
                            <strong>Call us:</strong>
                            <span className='d-block'>+1 (880) 567 891 505</span>
                        </span>
                        <span className='d-block text-parent'>
                            <strong>We are open:</strong>
                            <span className='d-block'>Monday - Friday: 8:00-20:00</span>
                        </span>
                    </div>
                </div>

            </div>
            <div className="contact-map w-100">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.046408237296!2d149.63792122368653!3d-33.42130179602106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b11e457f8449bab%3A0x48b5871ee336c011!2zU3lkbmV5IFJkLCBOZXcgU291dGggV2FsZXMgMjc5NdiMINij2LPYqtix2KfZhNmK2Kc!5e1!3m2!1sar!2seg!4v1746055124766!5m2!1sar!2seg"  height="600" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>  
      </ContactContainer>
      <Footer/>
    </>
  )
}

export default Contact
