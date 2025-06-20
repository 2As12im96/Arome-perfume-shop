import React, { useEffect } from 'react'
import NavbarOffcanvase from '../Navbar/Navbar'
import Footer from '../footer/footer'
import { WishlistContainer } from './Wishlist..style'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { addToCart, getTotals, justOneProduct, removeFromFavorite } from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

function Wishlist() {
    const dispatch = useDispatch();
    const carts = useSelector(state => state.cart);
    useEffect(()=>{
        dispatch(getTotals())
    },[carts.cartItems, dispatch]);
    

    const handleJustOneProduct = (item)=>{
        dispatch(justOneProduct(item))
    }
    const handleRemoveFromFavorite  = (item)=>{
        dispatch(removeFromFavorite(item))
    }
    const handleAddToCart = (item)=> {
        dispatch(addToCart(item))
    }
    
    return (
    <>
        <NavbarOffcanvase/>
        <WishlistContainer>
            <nav className='breadcrumb-nav' aria-label="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">wishlist</li>
                    </ol>
                </div>
            </nav>
            <div className="container">
                <div className="wishlist-parent ">
                    <div className="wishlist-found-product">
                        <div className="row">
                            {carts.favoriteItems && carts.favoriteItems.length > 0 ? 
                                (
                                    carts.favoriteItems.map((item) => (
                                        <div key={item._id} id={item._id} className="col-lg-3 col-md-4">
                                            <div className="card position-relative">
                                                <span className='new position-absolute text-center'>
                                                    {item.type === 'new' ? 'New' : ''}
                                                </span>
                                                <Link to={`/one-product/${item._id}`} onClick={() => handleJustOneProduct(item)}>
                                                    <div className="card_img">
                                                        <img src={item.imageURL.url} className='img-fluid' alt={item.title} />
                                                    </div>
                                                </Link>
                                                <div className="card_icons position-absolute">
                                                   
                                                    <div
                                                        className='icon d-flex justify-content-center align-items-center rounded-circle icon_Not'
                                                        onClick={() => handleRemoveFromFavorite(item)} 
                                                    >
                                                        <img src="/images/heart-slash.png" title='Remove from Wishlist' alt="" />
                                                    </div>
                                                   
                                                    <Link to={`/one-product/${item._id}`}>
                                                        <div className="icon d-flex justify-content-center align-items-center rounded-circle" onClick={() => handleJustOneProduct(item)}> 
                                                            <FontAwesomeIcon title='view' icon={faEye} />
                                                        </div>
                                                    </Link>
                                                    
                                                    <div className="icon d-flex justify-content-center align-items-center rounded-circle" onClick={() => handleAddToCart(item)}> 
                                                        <FontAwesomeIcon title='add to cart' icon={faBasketShopping} />
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
                                                            <h3><Link to={`/one-product/${item._id}`}>{item.title}</Link></h3>
                                                        </div>
                                                        <div className="card_text d-flex justify-content-center align-items-center">
                                                            <span className='sallery'>${item.cost}.00</span>
                                                            <span className='discount'>{item.discount ? `$${item.discount}.00` : ''}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ):
                                (<>
                                    <div className="wishlist-child">
                                        <span className='d-block not-404_icon text-center'>
                                            <svg id="fi_4076503" enableBackground="new 0 0 511.997 511.997" height="90" viewBox="0 0 511.997 511.997" width="90" xmlns="http://www.w3.org/2000/svg"><g><path d="m482.04 271.796c-.49-5.754-4.193-10.479-9.664-12.332l-44.39-15.032 43.215-49.58c2.869-3.291 4.069-7.643 3.294-11.939-.776-4.296-3.423-7.953-7.262-10.033l-55.753-30.207c-3.643-1.973-8.193-.621-10.168 3.021-1.973 3.642-.62 8.194 3.021 10.167l54.987 29.792-46.053 52.835-145.461-78.813 26.991-30.965c3.106 1.14 6.46 1.762 9.956 1.762 10.855 0 20.33-6.003 25.293-14.86l41.679 22.582c1.136.615 2.359.907 3.566.907 2.664 0 5.243-1.422 6.602-3.929 1.973-3.642.62-8.194-3.022-10.167l-45.164-24.469c-.509-15.535-13.296-28.018-28.953-28.018-15.978 0-28.977 12.999-28.977 28.977 0 7.035 2.522 13.49 6.706 18.515l-26.484 30.384-46.921-53.829c-4.43-5.083-11.663-6.39-17.594-3.178l-18.341 9.937c-2.149-16.995-16.686-30.185-34.255-30.185-19.044 0-34.538 15.494-34.538 34.539 0 10.53 4.743 19.969 12.198 26.309l-71.784 38.893c-3.838 2.08-6.484 5.736-7.261 10.033-.775 4.296.425 8.648 3.294 11.938l43.214 49.58-44.389 15.031c-5.471 1.853-9.174 6.578-9.664 12.332s2.36 11.038 7.438 13.789l52.127 28.242v28.309c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-20.182l72.928 39.512c3.111 1.686 6.582 2.543 10.066 2.543 2.278 0 4.563-.367 6.755-1.109l54.228-18.361v149.222l-140.781-76.278c-1.971-1.068-3.195-3.124-3.195-5.366v-32.956c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v32.956c0 7.752 4.233 14.861 11.049 18.554l145.374 78.767c3.148 1.706 6.601 2.558 10.054 2.558s6.906-.853 10.054-2.558l145.374-78.767c6.815-3.693 11.049-10.802 11.049-18.554v-98.291l52.126-28.242c5.075-2.748 7.926-8.031 7.436-13.786zm-209.461-58.022c26.254 7.38 44.59 31.59 44.59 58.875 0 7.598-1.365 14.972-4.063 21.959l-57.107 30.941-57.107-30.941c-2.697-6.987-4.063-14.361-4.063-21.959 0-27.369 18.406-51.6 44.762-58.925 3.99-1.109 6.326-5.244 5.217-9.234-1.108-3.991-5.245-6.326-9.234-5.218-32.821 9.123-55.744 39.296-55.744 73.377 0 4.11.333 8.167.973 12.159l-68.036-36.863 143.234-77.606 143.233 77.607-68.036 36.863c.64-3.992.973-8.049.973-12.159 0-33.977-22.835-64.125-55.531-73.316-3.988-1.122-8.129 1.204-9.249 5.19-1.124 3.988 1.199 8.129 5.188 9.25zm32.174-126.254c7.707 0 13.978 6.27 13.978 13.977s-6.271 13.978-13.978 13.978-13.977-6.271-13.977-13.978 6.27-13.977 13.977-13.977zm-165.865.621c10.773 0 19.539 8.765 19.539 19.539 0 10.773-8.766 19.539-19.539 19.539s-19.538-8.765-19.538-19.539 8.765-19.539 19.538-19.539zm-5.292 53.672c1.726.267 3.493.406 5.292.406 13.978 0 26.033-8.351 31.464-20.321l27.786-15.054 46.052 52.833-145.461 78.813-46.053-52.835zm55.864 206.88c-1.604.544-3.378.391-4.864-.415l-83.967-45.493c-.022-.012-.045-.024-.067-.036l-54.614-29.59 50.378-17.059 140.99 76.39zm218.015 63.425c0 2.242-1.225 4.298-3.195 5.366l-140.781 76.278v-149.222l54.228 18.361c2.192.742 4.477 1.109 6.756 1.109 3.482 0 6.954-.858 10.065-2.543l72.928-39.512v90.163zm-80.074-63.84c-1.486.806-3.26.959-4.864.415l-47.855-16.203 140.99-76.39 50.378 17.059zm140.164-74.606c-.001 0-.002-.001-.004-.001z"></path><path d="m312.088 424.684-17.205 9.322c-3.642 1.973-4.994 6.525-3.021 10.167 1.358 2.506 3.938 3.929 6.602 3.929 1.206 0 2.431-.292 3.566-.907l17.205-9.322c3.642-1.973 4.994-6.525 3.021-10.167s-6.523-4.996-10.168-3.022z"></path><path d="m167.694 63.16c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197l6.187-6.187 6.187 6.187c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197c2.929-2.929 2.929-7.678 0-10.606l-6.188-6.188 6.188-6.188c2.929-2.929 2.929-7.678 0-10.606-2.93-2.929-7.678-2.929-10.607 0l-6.187 6.187-6.187-6.187c-2.93-2.929-7.678-2.929-10.607 0s-2.929 7.678 0 10.606l6.188 6.188-6.188 6.188c-2.931 2.928-2.931 7.677-.002 10.606z"></path><path d="m389.734 112.29c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197l6.187-6.187 6.187 6.187c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197c2.929-2.929 2.929-7.678 0-10.606l-6.188-6.188 6.188-6.188c2.929-2.929 2.929-7.678 0-10.606-2.93-2.929-7.678-2.929-10.607 0l-6.187 6.187-6.187-6.187c-2.93-2.929-7.678-2.929-10.607 0s-2.929 7.678 0 10.606l6.188 6.188-6.188 6.188c-2.931 2.928-2.931 7.677-.002 10.606z"></path><path d="m348.328 65.351c18.018 0 32.676-14.658 32.676-32.675-.001-18.018-14.659-32.676-32.676-32.676s-32.676 14.658-32.676 32.676c0 18.017 14.658 32.675 32.676 32.675zm0-50.351c9.746 0 17.676 7.929 17.676 17.676 0 9.746-7.93 17.675-17.676 17.675s-17.676-7.929-17.676-17.675c0-9.747 7.93-17.676 17.676-17.676z"></path><path d="m255.152 280.515c-7.226 0-14.046 2.396-19.214 6.754-3.166 2.67-3.569 7.402-.898 10.568 2.669 3.167 7.401 3.569 10.568.899 2.43-2.049 5.906-3.222 9.545-3.222h.05c3.657.011 7.146 1.206 9.575 3.279 1.413 1.206 3.144 1.795 4.865 1.795 2.119 0 4.225-.893 5.708-2.631 2.689-3.15 2.315-7.885-.835-10.574-5.164-4.408-12.008-6.848-19.27-6.87-.031.002-.063.002-.094.002z"></path><path d="m223.421 258.304h-.07c-4.146-.061-7.487 3.307-7.517 7.448-.028 4.142 3.341 7.523 7.483 7.552h.053c4.117 0 7.47-3.324 7.499-7.448.029-4.142-3.305-7.523-7.448-7.552z"></path><path d="m287.179 273.15c.026.005.053.008.079.013.216.042.435.077.657.1.072.007.145.007.217.012.167.012.334.028.505.029h.053c.258 0 .513-.013.765-.039 3.787-.379 6.743-3.575 6.743-7.462 0-3.836-2.881-6.993-6.596-7.44-.034-.004-.067-.012-.101-.015-.171-.018-.346-.023-.521-.03-.08-.003-.158-.013-.239-.014h-.039c-.001 0-.003 0-.004 0h-.027-.044c-.003 0-.006 0-.009 0-4.117 0-7.435 3.324-7.464 7.448-.025 3.643 2.579 6.695 6.025 7.398z"></path></g></svg>
                                        </span>
                                        <h1 className='text-center'>Your wishlist is empty</h1>
                                        <p className='text-center'>No products were added to the wishlist page.</p>
                                        <button className='d-flex justify-content-center align-items-center'><Link to='/Shop' className='text-center'>BACK TO SHOPPING</Link></button>
                                    </div>
                                </>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </WishlistContainer>
        <Footer/>
    </>
    )
}

export default Wishlist


