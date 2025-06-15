import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavAdmin from "../NavAdmin/Nav";
import { OrdersContainer } from "./orders.style";
import Aside from "../Asidebar/Aside";
import OrdersList from './OrderList';
import { fetchOrders } from "../../../redux/orderSlice";

function Orders() {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
    const { orders, loading, error, status } = useSelector(state => state.orders); 

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]); 
    return (
        <>
            <NavAdmin isActive={isActive} setIsActive={setIsActive} />
            <OrdersContainer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Aside isActive={isActive} setIsActive={setIsActive} />
                        </div>
                        <div className="col-lg-9">
                            <div className='component_products just_order create_form mt-3'>
                                <h2>ALL ORDERS</h2>
                                {loading ? (
                                    <div className="loader-screen d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                                        <div className="spinner-border" role="status">
                                            <span className="loader"></span>
                                        </div>
                                    </div>
                                ) : error ? (
                                    <p className="text-danger">Error fetching orders: {error}</p>
                                ) : (
                                    <OrdersList orders={orders}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </OrdersContainer>
        </>
    );
}

export default Orders;