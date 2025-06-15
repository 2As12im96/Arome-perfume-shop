import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

function BlogLogic() {
    const data = [
        {
            id:'qepiuogbavasdfasgd',
            img:'/images/Blogs/1.webp',
            title:'Proper way to apply perfumes 2025',
        },
        {
            id:'qwroijgsdnbasxcz',
            img:'/images/Blogs/2.webp',
            title:'Top 5 Timeless & Classic Fragrances',
        },
        {
            id:'ertiouybnlajnqawdqf',
            img:'/images/Blogs/3.webp',
            title:'Our Perfumers’ Picks Of The Top 8',
        },
        {
            id:'xzcmbnxcaskljdgfiouregh',
            img:'/images/Blogs/4.webp',
            title:'Traveling Through Scent with Botanicae',
        },
        {
            id:'sfdgjlhsdhowieuhzxcvmn',
            img:'/images/Blogs/5.webp',
            title:'Guide to Always Smelling Exquisite',
        },
        {
            id:'wioeutyqawvxcmzxv',
            img:'/images/Blogs/6.webp',
            title:'Arome Rose Incense ~ new fragrance',
        },
    ];
    const handleClick = (id) => {
        const post = data.find((item) => item.id === id);
        localStorage.setItem('post', JSON.stringify(post));
    }
    const dataUi = data.map((item) => {
        return (
            <div className="col-lg-4" key={item.id}>
                <div id={item.id} className="card">
                    <Link to={`/Blog-Spot/${item.id}`} onClick={() => handleClick(item.id)}>
                        <div className="card-img">
                            <img src={item.img} className='img-fluid' alt="" />
                        </div>
                    </Link>
                    <div className="card-info">
                        <div className="card-icons d-flex justify-content-start align-items-center">
                            <span>
                                <FontAwesomeIcon icon={faUser} />
                                <span>Team 90Degree</span>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <span>Feb 28, 2025</span>
                            </span>
                        </div>
                        <div className="card-text">
                            <h5 onClick={() => handleClick(item.id)}><Link to={`/Blog-Spot/${item.id}`}>{item.title}</Link></h5>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in...</p>
                            <Link to={`/Blog-Spot/${item.id}`} className='read' onClick={() => handleClick(item.id)}>READ MORE</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
  return {
    dataUi,
  }
}

export default BlogLogic
