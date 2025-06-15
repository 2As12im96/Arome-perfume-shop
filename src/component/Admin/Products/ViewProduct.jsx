import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { setHeaders, Url } from "../../../redux/api";
import NavAdmin from "../NavAdmin/Nav";
import { ProductsContainer } from "./products.style";
import Aside from "../Asidebar/Aside";
import { DetailsContainer } from "../../ProductDetails/Detail/Details.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faStar } from "@fortawesome/free-solid-svg-icons";
import VisaIcons from "../../ProductDetails/Detail/VisaIcons";



function AdminViewProduct(){
    const params = useParams();
    const [product , setProduct] = useState({});
    const [loading , setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const [mainImage , setMainImage] = useState(''); 
    const [isActiveThumbnails , setIsActiveThumbnails] = useState(null);
    useEffect(()=>{
        async function fetchData(){
            setLoading(true)
            try{
            const resOrders = await axios.get(`${Url}/product/find/${params.id}`, setHeaders());
            setProduct(resOrders.data);
            if (resOrders.data.imageURL && resOrders.data.imageURL.url) {
                setMainImage(resOrders.data.imageURL.url);
                setIsActiveThumbnails(1);
            }
            }catch(err){
            console.log(err)
            }
            setLoading(false)
        }
        fetchData();
    },[params.id]);

    const thumbnailsData = [
        { _id: 1, src: product?.imageURL?.url , mainSrc: product?.imageURL?.url},
        { _id: 2, src: '/images/products/2.webp', mainSrc: '/images/products/2.webp' },
        { _id: 3, src: '/images/products/3.webp', mainSrc: '/images/products/3.webp' },
    ].filter(item => item.src);

    
    const handleThumbnailClick = (_id)=>{    
        const selectedId = thumbnailsData.find((thump)=> thump._id === _id);
        if(selectedId){
            setMainImage(selectedId.mainSrc);
            setIsActiveThumbnails(_id);
        }
    }
    const thumbnailsUi = thumbnailsData.map((item)=>{
        return(
            <img
                key={item._id}
                id={item._id}
                src={item.src || ''}
                alt={`thumbnail ${item._id}`}
                className={isActiveThumbnails === item._id ? 'active' : ''}
                onClick={() => handleThumbnailClick(item._id)}
            />
        )
    });
    return(
        <>
            <NavAdmin isActive={isActive} setIsActive={setIsActive}/>
            <ProductsContainer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <Aside isActive={isActive} setIsActive={setIsActive}/>
                        </div>
                        <div className='col-lg-9'>
                            <div className='view_product create_form mt-4'>
                                {loading ? 
                                    (
                                        <div className="loader-screen d-flex justify-content-center align-items-center">
                                            <div className="spinner-border" role="status">
                                                <span className="loader"></span>
                                            </div>
                                        </div>
                                    ) : 
                                    (<>
                                        <DetailsContainer>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="container-img">
                                                            <div className="parent-img w-100">
                                                                <img src={mainImage || ''}  alt={product.title || "Product Image"} />
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
                                                                            {product.title}
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
                                                                <h2 className='mt-2'> {product.title}</h2>
                                                                <span className='d-flex sallery mt-3 mb-3'>
                                                                    <span className='cost'>${product.cost}.00</span>
                                                                    <span className='discount mt-1 ms-3'>${product.discount}.00</span>
                                                                </span>

                                                                <span className='d-block q'>Quantity</span>
                                                                <div className="btns d-flex">
                                                                    <div className="count d-flex justify-content-around align-items-center w-25">

                                                                        <button className='d-flex justify-content-center align-items-center rounded-circle'>-</button>

                                                                        <span>1</span>

                                                                        <button className='d-flex justify-content-center align-items-center rounded-circle'>+</button>

                                                                    </div>
                                                                    <div className="addtocart w-75">
                                                                        <button className='button w-100'>ADD TO CART</button>
                                                                    </div>
                                                                </div>
                                                                <button className='button w-100'>BUY IT NOW</button>

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
                                    </>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </ProductsContainer>
            
        </>
    )
}
export default AdminViewProduct