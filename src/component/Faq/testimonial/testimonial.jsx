import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import { TestimonialContainer } from './testimonial_style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Testimonail_logic() {
  const data = [
    {
      id: '1',
      name: 'Karen Summers',
      img:'images/person/person%202.webp'
    },
    {
      id: '2',
      name: 'Olivor Brown',
      img:'images/person/person%203.jpg'
    },
    {
      id: '3',
      name: 'Sophia Martinez',
      img:'images/person/person%204.jpg'
    }
  ];
  const dataUi = data.map((item) => {
    return (
      <div key={item.id} className="col-lg-4  col-sm-12">
        <div key={item.id} id={item.id} className='card bg-white rounded-xl h-[450px]'>
          <div className="card-body  gap-4 p-4"> 
            <p className='text'>"Excellent service and top-notch supplements. The loyalty rewards is a great bonus. Will definitely keep ordering!"</p> 
            <div className="card-stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="d-flex justify-content-start align-items-center">
                <div className="card-img d-flex justify-content-center align-items-center">
                    <img src={item.img} className='img-fluid rounded-circle' alt="" />
                </div>
                <div className="card-name">
                    <h5 className='fs-5 fw-semibold'>{item.name}</h5>
                    <span className='d-flex align-items-center gap-2'> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="svg font-size-sm ml-1 text-tsw" style={{ height: '1em', fill: '#32c2ab' }}>
                        <path d="M6.506.28a1.49 1.49 0 011.806.051l.107.096.808.793c.137.134.307.226.492.267l.141.021 1.118.081a1.49 1.49 0 011.353 1.214l.019.134.109 1.125c.018.2.095.39.22.545l.08.09.808.792c.474.475.57 1.202.249 1.779l-.075.121-.627.936a1.022 1.022 0 00-.177.532l.004.143.109 1.13a1.492 1.492 0 01-.949 1.54l-.136.045-1.088.3a1.018 1.018 0 00-.494.312l-.073.094-.633.932a1.49 1.49 0 01-1.715.57l-.133-.053-1.029-.468a1.019 1.019 0 00-.554-.082l-.14.028-1.094.317c-.65.18-1.332-.1-1.674-.667l-.068-.126-.486-1.027a1.019 1.019 0 00-.394-.433l-.106-.055-1.029-.468a1.494 1.494 0 01-.858-1.588l.029-.14.283-1.1A1.01 1.01 0 00.693 7.5l-.052-.133-.493-1.019A1.493 1.493 0 01.51 4.576l.113-.089.918-.65c.165-.117.291-.28.363-.467l.037-.115.287-1.097a1.49 1.49 0 011.418-1.121l.144.004 1.124.084c.19.015.38-.025.548-.112l.122-.075.922-.658zm3.756 5.105c.686-.682-.401-1.526-.947-.98l-.334.344-2.872 3.05-.57-.612-.327-.34-.359-.367-.123-.124a.687.687 0 10-.947.985l.45.46 1.078 1.133.798.851 3.29-3.502.796-.83.067-.068z"></path>
                    </svg>
                    <p className='mb-0'>Verified Buyer</p> 
                    </span>
                </div>
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
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
            <h5 className='text-center'><span className='d-block'>Trusted by Thousands of</span> <span>Satisfied Customers.</span></h5> 
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