import React from 'react'
import NavbarOffcanvase from '../Navbar/Navbar'
import Footer from '../footer/footer'
import { CollectionContainer } from './Collection.style'
import { Link } from 'react-router-dom'

function Collection() {
  return (
    <> 
        <NavbarOffcanvase/>
        <CollectionContainer>
            <nav className="breadcrumb-nav" aria-label="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Collection</li>
                    </ol>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <h1 className='text-center'>Our Best Collections</h1>
                    <div className="col-lg-6 col-md-6">
                        <Link to='/Shop'>
                            <div className="collection-item text-center">
                                <div className="collection-img w-100 h-100">
                                    <img src="/images/products/11.webp" className='img-fluid' alt="" />
                                </div>
                                <h2>Women Perfumes</h2>
                                <p>7 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <Link to='/Shop'>
                            <div className="collection-item text-center">
                                <div className="collection-img w-100 h-100">
                                    <img src="/images/products/9.webp" className='img-fluid' alt="" />
                                </div>
                                <h2>Men Colognes</h2>
                                <p>8 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <Link to='/Shop'>
                            <div className="collection-item text-center">
                                <div className="collection-img w-100 h-100">
                                    <img src="/images/products/11.webp" className='img-fluid' alt="" />
                                </div>
                                <h2>Gift Set</h2>
                                <p>9 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <Link to='/Shop'>
                            <div className="collection-item text-center">
                                <div className="collection-img w-100 h-100">
                                    <img src="/images/products/1.webp" className='img-fluid' alt="" />
                                </div>
                                <h2>Best Seller</h2>
                                <p>11 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <Link to='/Shop'>
                            <div className="collection-item text-center">
                                <div className="collection-img w-100 h-100">
                                    <img src="/images/products/4.webp" className='img-fluid' alt="" />
                                </div>
                                <h2>New Fregrance</h2>
                                <p>3 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <Link to='/Shop'>
                            <div className="collection-item text-center">
                                <div className="collection-img w-100 h-100">
                                    <img src="/images/products/3.webp" className='img-fluid' alt="" />
                                </div>
                                <h2>Kids Perfume</h2>
                                <p>7 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <Link to='/Shop'>
                            <div className="collection-item text-center">
                                <div className="collection-img w-100 h-100">
                                    <img src="/images/products/8.webp" className='img-fluid' alt="" />
                                </div>
                                <h2>Hot Deals</h2>
                                <p>7 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <Link to='/Shop'>
                            <div className="collection-item text-center">
                                <div className="collection-img w-100 h-100">
                                    <img src="/images/products/9.webp" className='img-fluid' alt="" />
                                </div>
                                <h2>Men Colognes</h2>
                                <p>8 Items</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </CollectionContainer>
        <Footer/>
    </>
  )
}

export default Collection
