import React from 'react'
import { useEffect, useState } from 'react'
import productList from './productList.css'
import ProductCard from '../productCard/ProductCard'


const ProductList = ({ products, setProducts, productInChart, setProductInChart}) => {
  return (
    <div className='productList'>
        {products.map((product) =>(
            <div key={product.id}>
                < ProductCard product= {product} productInChart = {productInChart} setProductInChart = { setProductInChart } /> 
            </div>
        ))}
    </div>
  )
}

export default ProductList
