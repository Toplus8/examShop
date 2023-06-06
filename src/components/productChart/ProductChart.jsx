import React, { useState } from 'react'
import productChart from './productChart.css'

const ProductChart = ({productInChart}) => {
    let total =0;
    const [details, setDetails] = useState({
        articulo: "",
        precio:"",
    })
    
    const sendDataToFirebase =async ()=>{
        const{articulo,precio}= details;
        const res=await fetch("https://examshop-ee0d4-default-rtdb.europe-west1.firebasedatabase.app/listaCompras.json",
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    articulo,
                    precio,
                })
            }
        )
    
    }
    const setDataFirebase = (products)=>{
        {products.map((product)=>(
            setDetails({...details, articulo: product.title, precio: product.price})
        ))}
        sendDataToFirebase()
    }
     const setDataLocal = (products)=>{
        console.log(products)
        products.forEach(product=>{
            window.localStorage.setItem(product.title, product.price);
        })
    }

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
        <button id='checkoutFirebase' onClick={()=>setDataFirebase(productInChart)}> Almacenar detalles de compra en Firebase </button>
        <button id='checkoutLocal' onClick={()=>setDataLocal(productInChart)}> Almacenar detalles de compra en local</button>
    </div>
  )
}

export default ProductChart

