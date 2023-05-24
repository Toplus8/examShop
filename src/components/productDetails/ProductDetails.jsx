import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductDetails = ({data}) => {
   console.log(data)
  return (
    <div>
        <h2>{data.title}</h2>
        <img src={`${data.image}`}></img>
        <p> {data.description} </p>
        
        <Link to="/">Volver a la página inicial</Link> 
    </div>
  )
}

export default ProductDetails