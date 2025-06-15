import React from 'react'
import { BlogELement } from './blog_styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Blog() {
    const data = [
        {
            id:'aosifnaw0845q3r12',
            img:'/images/Blogs/1.webp',
            title:'Proper way to apply perfumes 2025'
        },
        {
            id:'1q02394uisdvkgnq230',
            img:'/images/Blogs/2.webp',
            title:'Top 5 Timeless & Classic Fragrances'
        },
        {
            id:'eprioyjm[wi8h234hngv',
            img:'/images/Blogs/7.webp',
            title:'Our Perfumers Picks Of The Top 8'
        }
    ]
    const handleClick = (id) => {
        const post = data.find((item) => item.id === id);
        localStorage.setItem('post', JSON.stringify(post));
    }
    const UiData = data.map((item)=>{
        return (
                <div key={item.id} className="col-lg-4 col-md-6">
                    <div id={item.id} className="card">
                        <Link to={`/Blog-Spot/${item.id}`} onClick={() => handleClick(item.id)}>
                            <div className="card-img">
                                <img src={item.img} className='img-fluid' alt="" />
                            </div>
                        </Link>
                        <div className="card-body">
                            <div className="card-icons d-flex">
                                <span>
                                    <FontAwesomeIcon icon={faUser} />
                                    <span>Team 90 Degree</span>
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faCalendarDays} />
                                    <span>Apr 22, 2025</span>
                                </span>
                            </div>
                            <div className="card-text">
                                <h5><Link>{item.title}</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
        )
    })
  return (
    <BlogELement>
        <div className="container">
            <div className="blog-title text-center">
                <span>OUR BLOG</span>
                <h4>News & Blog Updates</h4>
            </div>
            <div className="row">
                {UiData}
            </div>
        </div>
    </BlogELement>
  )
}

export default Blog
