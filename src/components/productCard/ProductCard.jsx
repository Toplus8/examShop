import React from 'react'
import productCard from './productCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({ product, setProducts, productInChart, setProductInChart}) => {

    const buyProduct =(item, id)=>{
            
      if (!productInChart.includes(item)){
        setProductInChart(productInChart.concat(item)); 
        const buy = document.getElementsByClassName('buy');
        buy[id-1].style.display = "none";
        const remove = document.getElementsByClassName('delete');
        remove[id-1].style.display = "block";
        const colour = document.getElementsByClassName('buyDeleteButton');
        colour[id-1].style.backgroundColor = "red";
        
      }else{
        const updatedChart = productInChart.filter(product => product != item)
        setProductInChart(updatedChart);
        const buy = document.getElementsByClassName('buy');
        buy[id-1].style.display = "block";
        const remove = document.getElementsByClassName('delete');
        remove[id-1].style.display = "none";
        const colour = document.getElementsByClassName('buyDeleteButton')
        colour[id-1].style.backgroundColor = "green";
      }
      //ejemplo filter: const resultado = animales.filter(animal => animal != 'oso');
      //console.log(productInChart)
    };
//console.log(product.id)
  return (
    <div className='productCard' key={product.id}>
        <div> { product.title } </div>
        <div className='imgDiv'><Link to={`/productos/${product.id}`}> <img src={`${product.image}`} ></img> </Link></div>
        <div> Precio: { product.price } €</div>
        <button  className= "buyDeleteButton" key={product.id} style={{backgroundColor:"green"}} onClick={()=>buyProduct(product, product.id)}>
          <p className='delete' style={{display:"none"}} >Eliminar</p><p className='buy'>Comprar</p>
          </button>
    </div>
  )
}

export default ProductCard