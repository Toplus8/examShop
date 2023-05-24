import React from 'react'
import productChart from './productChart.css'

const ProductChart = ({productInChart}) => {
    let total =0;
  return (
    <div className='productChart'>
        <h3>Carrito de la compra:</h3>
        {productInChart.map((product)=>(
            <div>
                {product.title} - &nbsp;
                {product.price} €
            </div>
        ))}
        < br/>
        <div className='total'>
            <h3>Total a pagar:</h3>
        
            
            {total = productInChart.reduce((prev, next) => prev + next.price, 0)}
            
        </div>
        
            
            
       

    </div>
  )
}

export default ProductChart

/*{productInChart.forEach( function (item){
    total+= item.price;
})
}*/