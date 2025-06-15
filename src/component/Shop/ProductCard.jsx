import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorite, justOneProduct, removeFromFavorite } from "../../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBasketShopping, faStar } from "@fortawesome/free-solid-svg-icons";

function ProductCard({ item }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userClient = localStorage.getItem('userClient') || localStorage.getItem('user');

    // Selects the 'favoriteItems' array from the Redux store's 'cart' slice.
    const favoriteItems = useSelector((state) => state.cart.favoriteItems);

    // Checks if the current 'item' exists in the 'favoriteItems' array.
    const isFavorite = favoriteItems.some((favItem) => favItem._id === item._id);

    // Toggles the favorite status of an item.
    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite(item));
        } else {
            dispatch(addToFavorite(item));
        }
    };

    // Handles adding the current item to the cart
    const handleAddToCart = () => {
        dispatch(addToCart(item));
    };

    // Handles dispatching the current item for display on a single product page
    const handleJustOneProduct = () => {
        dispatch(justOneProduct(item));
    };

    const handleNavigate = ()=>{
        navigate('/Login' , {replace:true})
    }

    return (
        <div key={item._id} className="col-lg-4 col-md-6">
            <div id={item._id} className="card position-relative">
                <span className='new position-absolute text-center'>
                    {item.type === 'new' ? 'New' : ''}
                </span>
                {userClient ? (
                    <Link to={`/one-product/${item._id}`} onClick={() => handleJustOneProduct()}>
                        <div className="card_img">
                            <img src={item.imageURL.url} className='img-fluid' alt="" />
                        </div>
                    </Link>
                ) : (
                    <Link to='/Login'>
                        <div className="card_img">
                            <img src={item.imageURL.url} className='img-fluid' alt="" />
                        </div>
                    </Link>
                )}
                <div className="card_icons position-absolute">
                    <div className={`icon d-flex justify-content-center align-items-center rounded-circle ${isFavorite && userClient ? 'icon_Not' : ''}`}
                            onClick={() => userClient ? handleToggleFavorite() : handleNavigate()}>
                        {userClient && isFavorite ? (
                            <img src="/images/heart-slash.png" title='Remove from Wishlist' alt=""/>
                        ) : (
                            <FontAwesomeIcon title='Add to Wishlist' icon={faHeart} />
                        )}
                    </div>
                    <Link to={`/one-product/${item._id}`} className="icon d-flex justify-content-center align-items-center rounded-circle" 
                            onClick={() => userClient ? handleJustOneProduct() : handleNavigate()}>
                        <FontAwesomeIcon title='view' icon={faEye} />
                    </Link>
                    <div className="icon d-flex justify-content-center align-items-center rounded-circle" 
                            onClick={() => userClient ? handleAddToCart() : handleNavigate()}>
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
}

export default ProductCard;