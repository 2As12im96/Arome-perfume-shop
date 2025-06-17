import React from 'react'
import { WomenSelling } from './Selling'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addToFavorite, justOneProduct } from '../../../redux/cartSlice'

function ProductFragrances() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const carts = useSelector(state => state.cart);
    const userClient = localStorage.getItem('userClient') || localStorage.getItem('user');

    // one just product on page alone
    const justOneProductItem = (item)=>{
        dispatch(justOneProduct(item))
    }
    //Add to wishlist list
    const addTOFavoritsLists = (item)=>{
        dispatch(addToFavorite(item))
    }
    //Add to Cart
    const addToCartsLists = (item)=>{
        dispatch(addToCart(item))
    }
    
    const handleNavigate = ()=>{
        navigate('/Login' , {replace:true})
    }
    const data = [
        {
            _id:'682a68e2d638f883e62e3f9b',
            imageURL:{url:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1747609818/ayfv4mwfucpfhqheuo6u.webp'},
            imgHover:'images/products/3.webp',
            title:'Aersace For Men',
            cost:50 ,
            discount:60
        },
        {
            _id:'682a67fcd638f883e62e3f95',
            imageURL:{url:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1747609589/en1iv9rjlvqpc4hmctra.webp'},
            imgHover:'images/products/14.webp',
            title:'Black Wild Fragrance',
            cost:30,
            discount:60
        },
        {
            _id:'682a695ed638f883e62e3f9f',
            imageURL:{url:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1747609944/tyufr2omn8z6xlzozjfd.webp'},
            imgHover:'images/products/10.webp',
            title:'Men Caramel Dream',
            cost:50,
            discount:60
        },
        {
            _id:'682a6a20d638f883e62e3fa5',
            imageURL:{url:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1747610138/y8tvf17ozkxpjdfooyja.webp'},
            imgHover:'images/products/5.webp',
            title:'Dolce & Gabbana Light Blue',
            cost:99,
            discount:120
        },

        {
            _id:'682a679027006c7616b7e4b9',
            imageURL:{url:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1747609481/jero68fc4sn3eoqvjnxh.webp'},
            imgHover:'images/products/2.webp',
            title:'Arome Le Parfum',
            cost:79,
            discount:100
        },
        {
            _id:'682a6829d638f883e62e3f97',
            imageURL:{url:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1747609634/hip9pinvimezkcve4fub.webp'},
            imgHover:'images/products/8.webp',
            title:'Brown Devotion Man',
            cost:50,
            discount:75
        },
        {
            _id:'682a69d1d638f883e62e3fa3',
            imageURL:{url:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1747610058/zugxry6j77r0ynpkrcdw.webp'},
            imgHover:'images/products/3.webp',
            title:'Essence Pour Home',
            cost:50,
            discount:60
        },
        {
            _id:'asgvsrehsfdujs1654@sdg',
            imageURL:{url:'https://res.cloudinary.com/dhoam6tdn/image/upload/v1747610532/rqb1cgbare3jgwvgv8n1.webp'},
            imgHover:'images/products/1.webp',
            title:'Arome  Virtual Flower',
            cost:50,
            discount:60
        },
    ];
    const renderProductCard = (item) => {
        const isFavorite = carts.favoriteItems.some((favItem) => favItem._id === item._id);
        return (
            <div key={item._id} className="col-lg-3 col-md-3">
                <div id={item._id} className="card position-relative">
                    <span className='new position-absolute text-center'>
                        {item.type === 'new' ? 'New' : ''}
                    </span>
                    {userClient ? (
                        <Link to={`/one-product/${item._id}`} onClick={() => justOneProductItem(item)}>
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
                             onClick={() => userClient ? addTOFavoritsLists(item) : handleNavigate()}>
                            {userClient && isFavorite ? (
                                <img src="/images/heart-slash.png" title='Remove from Wishlist' alt=""/>
                            ) : (
                                <FontAwesomeIcon title='Add to Wishlist' icon={faHeart} />
                            )}
                        </div>
                        <Link to={`/one-product/${item._id}`} style={{color: 'rgb(28,28,28)'}} className="icon d-flex justify-content-center align-items-center rounded-circle" 
                             onClick={() => userClient ? justOneProductItem(item) : handleNavigate()}>
                            <FontAwesomeIcon title='view' icon={faEye} />
                        </Link>
                        <div className="icon d-flex justify-content-center align-items-center rounded-circle" 
                             onClick={() => userClient ? addToCartsLists(item) : handleNavigate()}>
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
                <h2>Best Selling Fragrances</h2>
                <p>Each fragrance crafted to complement unique essence</p>
            </div>
            <div className="container">
                <div className="row">
                    {data.map((item) => renderProductCard(item))}
                </div>
            </div>
        </WomenSelling>
    )
}

export default ProductFragrances
