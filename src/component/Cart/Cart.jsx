import NavbarOffcanvase from '../Navbar/Navbar'
import Footer from '../footer/footer'
import { CartContianer } from './Cart.style'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import useCartLogic from './Cart.logic'


function Cart() {
    const {
        dataUi,
        isLoading,
        carts,
        justOneProductItem,
        decreaseCartNum,
        increaseCartNum,
        removeFromCartLists,
        clearData,
        checkout,
        } = useCartLogic();
    return (
        <>
            <NavbarOffcanvase/>
            <CartContianer>
                <nav className='breadcrumb-nav' aria-label="breadcrumb">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                        </ol>
                    </div>
                </nav>
                {carts && carts.cartItems.length > 0 ? 
                    (<>
                        <div className="shopping-cart mt-5 mb-5">
                            <div className="container">
                                <h1 className='text-center'>Shopping Cart</h1>
                                <div className="table-parent">
                                    <table className='w-100 mt-5 mb-3'>
                                        <thead className=''>
                                            <tr className='mt-5 mb-5 pt-3 pb-3'>
                                                <td>Product</td>
                                                <td>Price</td>
                                                <td className='text-center'>Quantity</td>
                                                <td className='text-center'>Total</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {carts.cartItems.map(item => {
                                                return(
                                                    <tr key={item._id}>
                                                        <td className='w-50'>
                                                            <div className="product-item d-flex pt-5 pb-0">
                                                                <Link to={`/one-product/${item._id}`} onClick={()=> justOneProductItem(item)}>
                                                                    <div className="product-img">
                                                                        <img src={item.imageURL?.url} alt="" />
                                                                    </div>
                                                                </Link>
                                                                <div className="product-info">
                                                                    <span className='d-block span'>Arome</span>
                                                                    <strong>{item.title}</strong>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span>${item.cost}.00</span>
                                                        </td>
                                                        <td>
                                                            <div className="count d-flex justify-content-center align-items-center">

                                                                <button className='d-flex justify-content-center align-items-center rounded-circle icon' onClick={()=> decreaseCartNum(item)}>-</button>

                                                                <span className='num'>{item.cartQuantity}</span>

                                                                <button className='d-flex justify-content-center align-items-center rounded-circle icon' onClick={()=> increaseCartNum(item)}>+</button>

                                                            </div>
                                                        </td>
                                                        <td className='text-center'>
                                                            <div className="d-flex justify-content-center align-items-center">
                                                                <span className='total'>${item.cost * item.cartQuantity}.00</span>
                                                                <FontAwesomeIcon icon={faTrashCan} title='remove' onClick={()=> removeFromCartLists(item)}/>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            
                                        </tbody>
                                    </table>
                                </div>
                                <span className='d-block w-100 line'></span>
                                <div className="checkout-details">
                                    <div className="btns d-flex justify-content-between align-items-center">
                                        <div className="text d-flex w-50 pt-4 pb-1">
                                            <strong>Cart total :</strong>
                                            <p>${carts.cartTotalAmount}.00</p>
                                        </div>
                                        <div className="text d-flex justify-content-end w-50 pt-4 pb-4">
                                            <Link to='/Shop'>Continue shopping</Link>
                                            <button onClick={clearData}>clear cart</button>
                                        </div>
                                    </div>
                                     <button className='checkout w-50 mt-3' onClick={checkout} disabled={isLoading}>
                                        {isLoading ? 
                                            (
                                                <span className='d-flex justify-content-center align-items-center rounded submit_btn'>
                                                    <span className='loader'></span>
                                                </span>
                                            ) :
                                            (
                                                'Proceed to Checkout'
                                            )
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>):
                    (<>
                        <div className="shopping-empty mt-5 mb-5">
                            <div className="container">
                                <h1 className='text-center'>Your cart is empty</h1>
                                <div className='d-flex justify-content-center align-items-center'><Link to='/Shop'>Continue shopping</Link></div>
                            </div>
                        </div>
                    </>)
                }
                

                

                <div className="featured mt-5 mb-5">
                    <div className="container">
                        <h1 className='text-center mt-3 mb-2'>Featured collection</h1>
                        <p className='text-center m-0 p-0 text'>YOU MAY LIKE THIS</p>
                        <div className="row">
                            {dataUi}
                        </div>
                    </div>
                </div>
            </CartContianer>
            <Footer/>
        </>
    )
}

export default Cart
