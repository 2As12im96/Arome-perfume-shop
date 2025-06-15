import React from 'react'
import { Selling } from './Selling'
import ProductsWomen from './productsWomen'

function ProductsSelling(){
  return (
    <Selling>
        <div className='container'>
            <ProductsWomen></ProductsWomen>
        </div>
    </Selling>
  )
}

export default ProductsSelling
