import NavbarOffcanvase from '../Navbar/Navbar'
import Footer from '../footer/footer'
import { ShopContainer, ShopContent } from './Shop.style'
import { Link } from 'react-router-dom'
import useShopLogic from './Shop.logic'
import ProductCard from './ProductCard'


function Shop() {
    const { loading, filteredData, getBreadcrumbText, filterOptionsUi, currentPage, totalPages,
            renderPageNumbers, goToPrevPage, goToNextPage, currentItems 
    } = useShopLogic();

    return (
        <>
            <NavbarOffcanvase/>
            <ShopContainer>
                <nav className="breadcrumb-nav" aria-label="breadcrumb">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {getBreadcrumbText()}
                            </li>
                        </ol>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="accordion">
                                <h5 className='pt-3 pb-3'>Categories</h5>
                                <span className='line d-block w-100'></span>
                                {filterOptionsUi}  
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="d-flex justify-content-between align-items-center flex-wrap mt-1 p-1">
                                <div className="row">
                                    {!loading && filteredData.length > 0 ? (
                                        currentItems.map((item) => (
                                            <ProductCard key={item._id} item={item} />
                                        ))
                                        ) : (
                                        !loading && filteredData.length === 0 ? (
                                            <div className="col-12"><p className='mt-5'>Not found products to present</p></div>
                                        ) : (
                                            <div className="col-12"><p className='mt-5'>Loading...</p></div>
                                        )
                                    )}
                                    {totalPages > 1 && (
                                        <nav aria-label="Page navigation example" className="mt-4">
                                            <ul className="pagination justify-content-center">
                                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                    <button className="page-link" onClick={goToPrevPage} disabled={currentPage === 1}>
                                                        prev
                                                    </button>
                                                </li>
                                                {renderPageNumbers()}
                                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                    <button className="page-link" onClick={goToNextPage} disabled={currentPage === totalPages}>
                                                        next
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ShopContent>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="shop-contnet-img w-100">
                                    <img src="/images/2670.avif" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="shop-content-info mx-2 mt-5">
                                    <h6 className='mb-3'>Find The Perfect Perfume To Express Unique Style.</h6>
                                    <p>Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.</p>
                                    <div className="item d-flex align-items-center">
                                        <img src="/images/food.webp" alt="" />
                                        <div className="text mt-3 mx-3">
                                            <p>Ingredient Sourcing</p>
                                            <span>Natural ingredients ut enim ad minim veniam, quis nostrud</span>
                                        </div>
                                    </div>
                                    <div className="item d-flex align-items-center">
                                        <img src="/images/gluten-free.webp" alt="" />
                                        <div className="text mt-3 mx-3">
                                            <p>Guaranteed Pure</p>
                                            <span>Natural ingredients ut enim ad minim veniam, quis nostrud</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ShopContent>
            </ShopContainer>
            <Footer/>  
        </>
    )
}

export default Shop
