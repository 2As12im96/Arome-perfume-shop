import React, { useEffect, useState } from 'react'
import { ProductsContainer } from './products.style'
import NavAdmin from '../NavAdmin/Nav'
import Aside from '../Asidebar/Aside'
import { Link } from 'react-router-dom';
import DataGridDemo from './DataGrid';
import { useDispatch, useSelector } from 'react-redux';
import { productsFetch } from '../../../redux/productSlice';

function Products() {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
    const products= useSelector(state=> state.products);
    const { data: productsData, loading } = products;
     useEffect(() => {
        dispatch(productsFetch());
    }, [dispatch]);
    const handleRender = () => {
        window.location.reload();
    } 
    return (
        <>  
            <NavAdmin isActive={isActive} setIsActive={setIsActive}/>            
            <ProductsContainer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Aside isActive={isActive} setIsActive={setIsActive}/>
                        </div>
                        <div className="col-lg-9">
                            <div className="create-page d-flex justify-content-between align-items-center mt-3 mb-5">
                                <h2>New product</h2>
                                <button onClick={()=> handleRender()}>
                                    <Link to='/Admin-create-product' className='d-block'>Create product</Link>
                                </button>
                            </div>
                            {loading === true ? 
                                (<>
                                    <div className="loader-screen d-flex justify-content-center align-items-center">
                                        <div className="spinner-border" role="status">
                                            <span className="loader"></span>
                                        </div>
                                    </div>
                                </>) : 
                                (<>
                                    <p style={{color: 'rgb(28,28,28)'}}>All products</p>
                                    <DataGridDemo products={productsData}/>
                                </>)
                            }
                        </div>
                    </div>
                </div>
            </ProductsContainer>
        </>
    )
}

export default Products
