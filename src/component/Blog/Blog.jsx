import React from 'react'
import { BlogContainer } from './Blog.style'
import { Link } from 'react-router-dom'
import NavbarOffcanvase from '../Navbar/Navbar'
import Footer from '../footer/footer'
import BlogLogic from './Blog.logic'

function Blog() {
    const {dataUi} = BlogLogic();
    return (
        <>
            <NavbarOffcanvase/>
            <BlogContainer>
                <nav className="breadcrumb-nav" aria-label="breadcrumb">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">News</li>
                        </ol>
                    </div>
                </nav>
                <div className="parent">
                    <div className="container">
                        <div className="row">
                            {dataUi}
                        </div>
                    </div>
                </div>
            </BlogContainer>
            <Footer/>
        </>
    )
}

export default Blog
