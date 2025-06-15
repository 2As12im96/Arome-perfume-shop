import React, { useEffect, useState } from 'react'
import { CreateProductContainer } from './createProduct.style'
import NavAdmin from '../NavAdmin/Nav'
import Aside from '../Asidebar/Aside'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productsCreate } from '../../../redux/productSlice';

function CreateProduct() {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector((state)=> state.products);
    const {loading, status} = product;
    const [productImg , setproductImg] = useState('');
    const [title , setTitle] = useState('');
    const [type , setType] = useState('');
    const [cost , setCost] = useState(0);
    const [discount , setDiscount] = useState(0);
    const [btnSubimt , setBtnSubmit] = useState(false);

    const handelProductImageUpload = (e)=>{
        const file = e.target.files[0];
        TransformFile(file);
    }
    const TransformFile = (file)=>{
        const reader = new FileReader();
        if(file){
            reader.readAsDataURL(file)
            reader.onloadend = ()=>{
                setproductImg(reader.result);
            }
        }else{
            setproductImg('')
        }
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setBtnSubmit(true)
        dispatch(productsCreate({
            title,
            type,
            cost,
            discount,
            imageURL: productImg,
        }))
        setTimeout(()=>{
            setBtnSubmit(false)
        },6000)
    }
    useEffect(()=>{
        if(status === 'success'){
            setTimeout(()=>{
                navigate('/Admin-products' , {replace:true});
            }, 6000)
        }
    },[status, navigate]);
    return (
        <>
            <NavAdmin isActive={isActive} setIsActive={setIsActive}/>
            <CreateProductContainer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Aside isActive={isActive} setIsActive={setIsActive}/>
                        </div>
                        <div className="col-lg-9">
                            <div className="row reverse">
                                <div className="col-lg-8 col-md-6 col-sm-12">
                                    <div className='product_form_data mt-2'>
                                        <p>Create product</p>
                                        <form onSubmit={handleSubmit}>

                                        <input type='file' accept='image/' className='form-control'
                                        onChange={handelProductImageUpload}
                                        required/>

                                        <input type='text' className='form-control' 
                                        placeholder='Name'
                                        onChange={(e)=> setTitle(e.target.value)}
                                        required/>  

                                        <input type='text' className='form-control' 
                                        placeholder='Type'
                                        onChange={(e)=> setType(e.target.value)}
                                        required/>

                                        <input type='text' className='form-control' 
                                        placeholder='Cost'
                                        onChange={(e)=> setCost(e.target.value)}
                                        required/>

                                        <input type='text' className='form-control' 
                                        placeholder='Discount'
                                        onChange={(e)=> setDiscount(e.target.value)}
                                        required/>
                                        
                                        {loading === true ? 
                                            (<>
                                                <span className='d-flex justify-content-center align-items-center rounded submit_btn'>
                                                    <span className='loader'></span>
                                                </span>
                                            </>):
                                            (<>
                                                <span className='d-flex justify-content-center align-items-center rounded submit_btn'>
                                                    <input type='submit' value='submit' disabled={btnSubimt} className={btnSubimt ? 'btn active' : 'btn'}/> 
                                                </span>
                                            </>)
                                        }    
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className='product_form_img d-flex justify-content-center align-items-center rounded mt-4'>
                                        {productImg ? 
                                            (
                                                <>
                                                    <img src={productImg} alt='product image!' className='img-fluid'/>
                                                </>
                                            )
                                        :   (
                                                <p>Image preview will appear here!</p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CreateProductContainer>
        </>
    )
}

export default CreateProduct
