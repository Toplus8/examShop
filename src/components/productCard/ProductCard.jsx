import React from 'react'
import productCard from './productCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({ product, setProducts, productInChart, setProductInChart}) => {

    const buyProduct =(item)=>{
       /*ToDo:Crear un if item exist en productInChart, filter con ! y setProductInCHart con el resultado */
      //console.log(item)
      
      if (!productInChart.includes(item)){
        setProductInChart(productInChart.concat(item)); 
        document.getElementById('buy').style.display = "none";
        document.getElementById('delete').style.display = "block";
        
      }else{
        const updatedChart = productInChart.filter(product => product != item)
        setProductInChart(updatedChart);
        document.getElementById('buy').style.display = "block";
        document.getElementById('delete').style.display = "none";
        
      }
      //ejemplo filter: const resultado = animales.filter(animal => animal != 'oso');
      //console.log(productInChart)
    };
//console.log(product.id)
  return (
    <div className='productCard'>
        <div> { product.title } </div>
        <div className='imgDiv'><Link to={`/productos/${product.id}`}> <img src={`${product.image}`} ></img> </Link></div>
     
        <div> Precio: { product.price } €</div>
        <button onClick={()=>buyProduct(product)}>
          <p id='delete' style={{display:"none"}} >Eliminar</p><p id='buy'>Comprar</p>
          </button>
    </div>
  )
}

export default ProductCard