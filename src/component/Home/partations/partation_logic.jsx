import React from 'react'
import { Link } from 'react-router-dom';
import useShopLogic from '../../Shop/Shop.logic';


function partation_logic() {
    const { request } = useShopLogic();
    const data = [
        {
            id:'cart_img_1',
            image:'images/2730.avif',
            section:'Men Colognes',
            itmes:`8 Items`
        },
        {
            id:'cart_img_2',
            image:'images/2119.webp',
            section:'Women Perfumes',
            itmes:`7 Items`
        },
        {
            id:'cart_img_3',
            image:'images/2670.avif',
            section:'Kids Perfume',
            itmes:`7 Items`
        },
        {
            id:'cart_img_4',
            image:'images/2550.avif',
            section:'New Fragrance',
            itmes:`3 Items`
        },
    ];
    const UiData = data.map((item)=>{
        return (
            <div key={item.id} className='col-lg-3 col-md-3 col-sm-6'>
                <Link to='/Shop'>
                    <div id={item.id} className='cart text-center'>
                        <div className='card-img'>
                            <img src={item.image} className='img-fluid' alt=''/>
                        </div>
                        <div className='card-info'>
                            <h4>{item.section}</h4>
                            <p>{item.itmes}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    });
    return {
        UiData,
    };
}

export default partation_logic
