import React, { useEffect, useState } from 'react'
import { DetailsContainer } from './Details.style'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import VisaIcons from './VisaIcons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart, getTotals } from '../../../redux/cartSlice';
import { Url } from '../../../redux/api';
import axios from 'axios';

function DetailParent() {
    const dispatch = useDispatch();
    const localData = JSON.parse(localStorage.getItem('justOneProduct'));
    const productDetail = localData[0];
    const carts = useSelector(state => state.cart.cartItems);
    const productInCart = carts.find(item => item._id === productDetail._id);
    const currentQuantity = productInCart ? productInCart.cartQuantity : 0;
    const disabledDecreaseButton = currentQuantity === 0; 


    useEffect(() => {
        dispatch(getTotals());;
    },[dispatch , carts , productDetail]);

    //Add to Cart Lists
    const addTOCartLists = (item)=>{
        dispatch(addToCart(item))
        dispatch(getTotals());
    }
    //Decrese Cart
    const decreaseCartNum = (item)=>{
        dispatch(decreaseCart(item))
        dispatch(getTotals());
    }
    //Increase Cart
    const increaseCartNum = (item)=>{
        dispatch(addToCart(item));
        dispatch(getTotals());
        
    }
    
    const cartData = useSelector(state => state.cart);
    const user = useSelector(state => state.auth);
    //Checkout
    const [isLoading, setIsLoading] = useState(false);
    const checkout = () => {
        setIsLoading(true);
        let currentUserId = user ? user._id : null;
        if (!currentUserId) {
            try {
                const userFromLocalStorage = localStorage.getItem('user')
                if (userFromLocalStorage) {
                    const parsedUser = JSON.parse(userFromLocalStorage);
                    currentUserId = parsedUser.id; 
                }
            } catch (e) {
                console.error("Error parsing user from localStorage:", e);
            }
        }

        if (!currentUserId) {
            console.error("User ID is not available. Please log in.");
            setIsLoading(false);
            return;
        }

        axios.post(`${Url}/stripe/create-checkout-session`, {
            carts: cartData.cartItems,
            userId: currentUserId
        })
        .then((res) => {
            if (res.data.url) {
                window.location.href = res.data.url;
            }
        })
        .catch((err) => {
            console.error("Error creating checkout session:", err.message);
            setIsLoading(false);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };



    const thumbnailsData = [
        { _id: 1, src: localData[0]?.imageURL?.url , mainSrc: localData[0]?.imageURL?.url},
        { _id: 2, src: '/images/products/2.webp', mainSrc: '/images/products/2.webp' },
        { _id: 3, src: '/images/products/3.webp', mainSrc: '/images/products/3.webp' },
        { _id: 4, src: '/images/products/4.webp', mainSrc: '/images/products/4.webp' },
    ];

    const [mainImage , setMainImage] = useState(thumbnailsData[0].mainSrc);
    const [isActive , setIsActive] = useState(thumbnailsData[0]._id);
    const handleThumbnailClick = (_id)=>{   
        const selectedId = thumbnailsData.find((thump)=> thump._id === _id);
        if(selectedId){
            setMainImage(selectedId.mainSrc);
            setIsActive(_id);
        }
    }
    const thumbnailsUi = thumbnailsData.map((item)=>{
        return(
            <img
                key={item._id}
                id={item._id}
                src={item.src}
                alt={`thumbnail ${item._id}`}
                className={isActive === item._id ? 'active' : ''}
                onClick={() => handleThumbnailClick(item._id)}
            />
        )
    });
    return (
        <>
            <DetailsContainer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="container-img">
                                <div className="parent-img w-100">
                                    <img src={mainImage}  alt="" />
                                </div>
                                <div className="child-img d-flex">
                                    {thumbnailsUi}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="container-info">
                                <nav className="breadcrumb-nav" aria-label="breadcrumb">
                                    <div className="container">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to='/'>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                {localData[0].title}
                                            </li>
                                        </ol>
                                    </div>
                                </nav>
                                <div className="text">
                                    <span className='title'><strong>Sku:</strong>3010</span>
                                    <div className="stars_icon d-flex align-items-center">
                                        <span className="d-flex justify-content-center align-items-center">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className='num'>(2)</span>
                                    </div>
                                    <h2 className='mt-2'> {localData[0].title}</h2>
                                    <span className='d-flex sallery mt-3 mb-3'>
                                        <span className='cost'>${localData[0].cost}.00</span>
                                        <span className='discount mt-1 ms-3'>${localData[0].discount}.00</span>
                                    </span>

                                    <span className='d-block q'>Quantity</span>
                                    <div className="btns d-flex">
                                        <div className="count d-flex justify-content-around align-items-center w-25">

                                            <button className={disabledDecreaseButton ? 'disabled d-flex justify-content-center align-items-center rounded-circle' : 'd-flex justify-content-center align-items-center rounded-circle'} disabled={disabledDecreaseButton} onClick={()=> decreaseCartNum(productDetail)}>-</button>

                                            <span>{currentQuantity}</span>

                                            <button className='d-flex justify-content-center align-items-center rounded-circle' onClick={()=> increaseCartNum(productDetail)}>+</button>

                                        </div>
                                        <div className="addtocart w-75" onClick={()=> addTOCartLists(productDetail)}>
                                            <button className='button w-100'>ADD TO CART</button>
                                        </div>
                                    </div>
                                    {isLoading ? 
                                        (<>
                                                <button className='button w-100' onClick={()=> checkout()}>
                                                    <span className='loader'></span>
                                                </button>
                                        </>):
                                        (<>
                                                <button className='button w-100' onClick={()=> checkout()}>BUY IT NOW</button>
                                        </>)
                                    }

                                    <h5>Guaranteed safe checkout</h5>
                                    <VisaIcons/>
                                    <div className="discription">
                                        <div className="heading d-flex">
                                            <span className='d-flex justify-content-center align-items-center rounded-circle'>
                                                <FontAwesomeIcon icon={faStar} />
                                            </span>
                                            <h6>Product Description</h6>
                                        </div>
                                        <p>
                                            <span className='d-block'>Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from TEAM90DEGREE™ LTD™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity and water supply.</span>
                                        </p>
                                    </div>
                                    <div className="discription">
                                        <div className="heading d-flex">
                                            <span className='d-flex justify-content-center align-items-center rounded-circle'>
                                                <FontAwesomeIcon icon={faQuestion} />
                                            </span>
                                            <h6>Our Privacy policy</h6>
                                        </div>
                                        <p>
                                            <span className='d-block'>Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.</span>
                                            <span className='d-block'>We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DetailsContainer>
        </>
    )
}

export default DetailParent
