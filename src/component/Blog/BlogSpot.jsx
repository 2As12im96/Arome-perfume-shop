import React from 'react'
import Footer from '../footer/footer'
import { BlogSpotContainer } from './Blog.style'
import NavbarOffcanvase from '../Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';

function BlogSpot() {
    const blogData = JSON.parse(localStorage.getItem("post"));
  return (
    <>
        <NavbarOffcanvase/>
        <BlogSpotContainer>
            <div className="parent">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card" id={blogData.id}>
                                <div className="card-img">
                                    <img src={blogData.img}  alt='' />
                                </div>
                                <div className="card-info">
                                    <div className="card-icons d-flex justify-content-start align-items-center">
                                        <span>
                                            <FontAwesomeIcon icon={faUser} />
                                            <span>Team 90Degree</span>
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faCalendarDays} />
                                            <span>Feb 28, 2025</span>
                                        </span>
                                    </div>
                                    <div className="card-text">
                                        <h5>{blogData.title}</h5>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. Store your odds and ends in a breezy, beach house style with these stylish agora bins! Handcrafted of 100% jute for a natural, casual feel, these baskets are perfect for plants, laundry, toys… As important as dreams are, they arent enough. Dreams don’t take you where you want to go.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BlogSpotContainer>
        <Footer/>
    </>
  )
}

export default BlogSpot
