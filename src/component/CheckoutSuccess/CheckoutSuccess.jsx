import { useNavigate } from "react-router-dom";
import { CheckoutSuccessContainer } from "./checkout_success.style";
import { useDispatch } from "react-redux";
import { removeData } from "../../redux/cartSlice";
function CheckoutSuccess(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = localStorage.getItem('cartItems');
    const handleClick = ()=>{
        dispatch(removeData());
        navigate('/' , {replace:true});
        if(cartItems){
            localStorage.removeItem('cartItems');
            localStorage.removeItem('orderToken');
        }
    }
    return(
        <>
            <CheckoutSuccessContainer>
                <div className="container">
                    <span className="d-flex justify-content-center align-items-center">
                        <span className="success_icon d-flex justify-content-center align-items-center rounded-circle">
                            <i className="bi bi-check-lg"></i>
                        </span>
                    </span>
                    <p className="title_success d-flex justify-content-center align-items-center text-center">Payment Successfull</p>
                    <span className='message_text d-block text-center'>Thank you! Your payment is complete</span>
                    <span className="btn_click d-flex justify-content-center align-items-center">
                        <button className='btn_success d-flex justify-content-center align-items-center rounded' onClick={handleClick}>
                            Done
                        </button>
                    </span>
                </div>
            </CheckoutSuccessContainer>
            
        </>
    )
}
export default CheckoutSuccess;