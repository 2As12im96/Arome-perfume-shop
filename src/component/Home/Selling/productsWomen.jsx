import React, { useEffect, useRef } from 'react'
import { WomenSelling } from './Selling'
import { faBasketShopping, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, replace, useNavigate } from 'react-router-dom'
import { faEye } from '@fortawesome/free-regular-svg-icons'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addToFavorite, getTotals, justOneProduct, removeFromFavorite } from '../../../redux/cartSlice'

function ProductsWomen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const carts = useSelector(state => state.cart);
    const userClient = localStorage.getItem('userClient') || localStorage.getItem('user');
    useEffect(()=>{
        dispatch(getTotals())
    },[carts.cartItems, dispatch]);

    const handleJustOneProduct = (item)=>{
        dispatch(justOneProduct(item))
    }
    const handleToggleFavorite  = (item)=>{
        const isFavorite = carts.favoriteItems.some((favItem) => favItem._id === item._id);
        if (isFavorite) {
            dispatch(removeFromFavorite(item));
        } else {
            dispatch(addToFavorite(item));
        }
    }
    const handleAddToCart = (item)=> {
        dispatch(addToCart(item))
    }
    const handleNavigate = ()=>{
        navigate('/Login' , {replace:true})
    }
    const Data = [
        {
            _id:'682a699bd638f883e62e3fa1',
            imageURL: { url: 'https://res.cloudinary.com/dhoam6tdn/image/upload/v1747610307/wnbeirsihhot4ecioclf.webp' },
            imgHover: '/images/products/15.webp',
            title:'Love Edition For Her',
            type:'man',
            cost:30 ,
            discount:60
        },
        {
            _id:'682a679027006c7616b7e4b9',
            imageURL: { url: 'https://res.cloudinary.com/dhoam6tdn/image/upload/v1747609481/jero68fc4sn3eoqvjnxh.webp' },
            imgHover: '/images/products/2.webp',
            title:'Arome Le Parfum',
            type:'man',
            cost:79,
            discount:100 

        },
        {
            _id:'682a68e2d638f883e62e3f9b',
            imageURL: { url: 'https://res.cloudinary.com/dhoam6tdn/image/upload/v1747609818/ayfv4mwfucpfhqheuo6u.webp' },
            imgHover: '/images/products/3.webp',
            title:'Aersace For Men',
            type:'man',
            cost: 50 ,
            discount:60 

        },
        {
            _id:'682a6927d638f883e62e3f9d',
            imageURL: { url: 'https://res.cloudinary.com/dhoam6tdn/image/upload/v1747609888/nb851k1fn9vrspuls3ni.webp' },
            imgHover: '/images/products/12.webp',
            title:'Million Gold for Her',
            type:'man',
            cost: 50,
            discount: 60 

        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
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
                slidesToScroll: 1,
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
    const renderProductCard = (item) => {
        const isFavorite = carts.favoriteItems.some((favItem) => favItem._id === item._id);
        return (
            <div key={item._id} className="col-lg-3 col-md-3 col-sm-6">
                <div id={item._id} className="card position-relative">
                    <span className='new position-absolute text-center'>
                        {item.type === 'new' ? 'New' : ''}
                    </span>
                    {userClient ? (
                        <Link to={`/one-product/${item._id}`} onClick={() => handleJustOneProduct(item)}>
                            <div className="card_img">
                                <img src={item.imageURL.url} className='img-fluid before' alt="" />
                                <img src={item.imgHover} className='img-fluid after' alt="" />
                            </div>
                        </Link>
                    ) : (
                        <Link to='/Login'>
                            <div className="card_img">
                                <img src={item.imageURL.url} className='img-fluid before' alt="" />
                                <img src={item.imgHover} className='img-fluid after' alt="" />
                            </div>
                        </Link>
                    )}
                    
                    <div className="card_icons position-absolute">
                        <div className={`icon d-flex justify-content-center align-items-center rounded-circle ${isFavorite && userClient ? 'icon_Not' : ''}`}
                             onClick={() => userClient ? handleToggleFavorite(item) : handleNavigate()}>
                            {userClient && isFavorite ? (
                                <img src="/images/heart-slash.png" title='Remove from Wishlist' alt=""/>
                            ) : (
                                <FontAwesomeIcon title='Add to Wishlist' icon={faHeart} />
                            )}
                        </div>
                        <Link to={`/one-product/${item._id}`} style={{color: 'rgb(28,28,28)'}} className="icon d-flex justify-content-center align-items-center rounded-circle" 
                        onClick={() => userClient ? handleJustOneProduct(item) : handleNavigate()}>
                            <FontAwesomeIcon title='view' icon={faEye} />
                        </Link>
                        <div className="icon d-flex justify-content-center align-items-center rounded-circle" 
                             onClick={() => userClient ? handleAddToCart(item) : handleNavigate()}>
                            <FontAwesomeIcon title='add to card' icon={faBasketShopping} />
                        </div>
                    </div>
                    <div className="card_info">
                        <div className="card_body">
                            <div className="stars_icon d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="card_title text-center">
                                <h3><Link to={userClient ? `/one-product/${item._id}` : '/Login'}>{item.title}</Link></h3>
                            </div>
                            <div className="card_text d-flex justify-content-center align-items-center">
                                <span className='sallery'>${item.cost}.00</span>
                                <span className='discount'>${item.discount}.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <WomenSelling>
            <div className='title text-center'>
                <h2>Best Sellers For Women</h2>
                <p>Each fragrance crafted to complement unique essence</p>
            </div>
            <div className="container">
                <div className="row">
                    <Slider {...settings}>
                        {Data.map((item) => renderProductCard(item))}
                    </Slider>
                </div>
            </div>
        </WomenSelling>
    );
}

export default ProductsWomen

