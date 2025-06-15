import React, { useEffect, useState } from 'react'
import { FooterElement, FooterEnd } from './footer_styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faPinterest, faSnapchat, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { faArrowRightLong, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import VisaIcons from './visaIcons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

function Footer() {
    const [blocked , setBlocked] = useState(null);
    const handleLinksClick = (id) => {
        setBlocked(blocked === id ? null : id);
    };
    /*--------------------------------------*/
    // scrollToTop button
    const [scrollTop , setScrollTop] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>{
            window.scrollY > 250 ? setScrollTop(true) : setScrollTop(false);
        };
        window.addEventListener('scroll' , handleScroll);
        return ()=>{
            window.removeEventListener('scroll' , handleScroll)
        }
    } , []);
    const ScrollToTopButton = ()=> {
        window.scrollTo({
            top: 0 ,
            behavior:'smooth',
        });
    }
/*--------------------------------------*/
  return (
    <>
        <FooterElement>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="child-footer">
                            <span className='d-block head-title'>
                                <img src="/images/logo_3a2ba3d8-e1d2-4670-b31b-f5e553e41b8c.avif" alt="" />
                            </span>
                            <p>
                                Arome® was founded on the belief that wellness is more than just a necessity—it's a powerful expression of self-care and vitality.
                            </p>
                            <div className="social-icons">
                                <span><Link><FontAwesomeIcon icon={faXTwitter} /></Link></span>
                                <span><Link><FontAwesomeIcon icon={faInstagram} /></Link></span>
                                <span><Link><FontAwesomeIcon icon={faFacebookF} /></Link></span>
                                <span><Link><FontAwesomeIcon icon={faPinterest} /></Link></span>
                                <span><Link><FontAwesomeIcon icon={faSnapchat} /></Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div id='first' className="child-footer">
                            <h5 className='head-title d-flex justify-content-between align-items-center' onClick={()=> handleLinksClick('first')}>
                                <span className='text'>Useful Links </span>
                                <span className={blocked === 'first' ? 'icon active' : 'icon'}><FontAwesomeIcon icon={faChevronDown} /></span>
                            </h5>
                            <ul className={blocked === 'first' ? 'active ul' : 'ul'}>
                                <li><Link>My Account</Link></li>
                                <li><Link>Shopping Cart</Link></li>
                                <li><Link>My Wishlist</Link></li>
                                <li><Link>Our Store Info</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div id='second' className="child-footer">
                            <h5 className='head-title d-flex justify-content-between align-items-center' onClick={()=> handleLinksClick('second')}>
                                <span className='text'>Information</span> 
                                <span className={blocked === 'second' ? 'icon active' : 'icon'}><FontAwesomeIcon icon={faChevronDown} /></span>
                            </h5>
                            <ul className={blocked === 'second' ? 'active ul' : 'ul'}>
                                <li><Link>Order tracking</Link></li>
                                <li><Link to='/Wishlist'>WishList</Link></li>
                                <li><Link>Privecy Policy</Link></li>
                                <li><Link>Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div id='third' className="child-footer">
                            <h5 className='head-title d-flex justify-content-between align-items-center' onClick={()=> handleLinksClick('third')}>
                                <span className='title'>Newsletter</span> 
                                <span className={blocked === 'third' ? 'icon active' : 'icon'}><FontAwesomeIcon icon={faChevronDown} /></span>
                            </h5>
                            <div className={blocked === 'third' ? 'active ul' : 'ul'}>
                                <p>Subscribe to our newsletter to receive news on update.</p>
                                <form className='d-flex justify-content-between align-items-center position-relative'>
                                    <input type="email" className='form-control' placeholder='Enter your Email' required/>
                                    <button className='position-absolute'><FontAwesomeIcon icon={faArrowRightLong} /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FooterElement>
        <FooterEnd>
            <div className="container">
                <div>
                    <div className="parent d-flex justify-content-between align-items-center">
                        <VisaIcons></VisaIcons>
                        <p>
                            © 2025  , 
                            <FontAwesomeIcon icon={faHeart} />
                            Designed By Asim Badawi
                        </p>
                    </div>
                    <div className= {scrollTop ? 'scrollToTop active d-flex justify-content-center align-items-center rounded' : 'scrollToTop d-flex justify-content-center align-items-center rounded'} onClick={ScrollToTopButton}>
                    <FontAwesomeIcon icon={faChevronUp} />
                    </div>
                </div>
            </div>
        </FooterEnd>
    </>
  )
}

export default Footer




 
 




