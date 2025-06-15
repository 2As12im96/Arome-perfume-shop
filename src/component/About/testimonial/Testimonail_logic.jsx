import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialContainer } from '../../Home/testimonial/testimonial_style';
import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Testimonail_logic() {
  const data = [
    {
      id: '10u8opgijhisgjn0',
      name: 'Kevin Berke',
      job:'Administrator',
      img:'images/person/team5-copyright-570x696.webp'
    },
    {
      id: '2034698upksdgjvo',
      name: 'Kristopher Bunn',
      job:'Perfume Expert',
      img:'images/person/team6-copyright-570x696.webp'
    },
    {
      id: '3dcvkimaps092063i80489dg',
      name: 'Barbara Hamby',
      job:'Labor Assistance',
      img:'images/person/team4-copyright-570x696.webp'
    },
    {
      id: '4ghjn4sdlkgnepoiuni80489dg',
      name: 'Michael Murray',
      job:'Perfume Expert',
      img:'images/person/team3-copyright-570x696.webp'
    }
  ];
  const dataUi = data.map((item) => {
    return (
      <div key={item.id} className="col-lg-4  col-sm-12">
        <div key={item.id} id={item.id} className='card bg-white rounded-xl h-[450px]'>
          <div className="card-body  gap-4 p-4"> 
            <div className="card-img">
              <img src={item.img} className='img-fluid' alt="" />
            </div>
            <div className="card-text text-center">
              <div className="card-social d-flex justify-content-center gap-2 mb-3">
                <Link to='/About'>
                  <span className='d-flex justify-content-center align-items-center rounded-circle gap-2 mb-3'>
                      <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </Link>
                <Link to='/About'>
                  <span className='d-flex justify-content-center align-items-center rounded-circle gap-2 mb-3'>
                      <FontAwesomeIcon icon={faXTwitter} />
                  </span>
                </Link>
                <Link to='/About'>
                  <span className='d-flex justify-content-center align-items-center rounded-circle gap-2 mb-3'>
                      <FontAwesomeIcon icon={faYoutube} />
                  </span>
                </Link>
              </div>
              <h6>{item.name}</h6>
              <p>{item.job}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <TestimonialContainer>
        <div className="container"> 
          <div className="row justify-content-center">
            <h5 className='text-center heading'>Meet Our Experts</h5>
            <span className='text-center team'>OUR TEAM</span> 
            <Slider {...settings}>
                {dataUi}
            </Slider>
          </div>
        </div>
      </TestimonialContainer>
    </>
  );
}

export default Testimonail_logic;