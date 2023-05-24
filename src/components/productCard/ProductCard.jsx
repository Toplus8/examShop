import React from 'react'
import productCard from './productCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({ product, setProducts, productInChart, setProductInChart}) => {

    const buyProduct =(item)=>{
        /*ToDo:Crear un if item exist en productInChart, filter con ! y setProductInCHart con el resultado */
      //console.log(item)
      setProductInChart(productInChart.concat(item)); 
      //console.log(productInChart)
    };

  return (
    <div className='productCard'>
        <div> { product.title } </div>
     <Link to={`/productos/${product.id}`}> <img src={`${product.image}`} ></img> </Link>
        <div> Precio: { product.price } €</div>
        <button onClick={()=>buyProduct(product)}>Comprar</button>
    </div>
  )
}

export default ProductCard