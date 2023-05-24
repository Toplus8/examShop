import React from 'react'
import { useState, useEffect} from 'react'
import getData from '../helpers/getData'
import ProductList from '../components/productList/ProductList'
import ProductChart from '../components/productChart/ProductChart'
import home from './home.css'

const Home = () => {
  
    const [products, setProducts] = useState([])
    const [productInChart, setProductInChart] = useState([])
            
    useEffect (()=> {
     getDetails();
    }, []);
    const getDetails = () => {
     getData('https://fakestoreapi.com/products')
     .then((data) => {
        //console.log(data)
         setProducts(data);
        
     })
       .catch((error) => console.error(error));
   } 
    
     return (
       
         <div className='container'>
           < ProductList products = { products } setProducts = { setProducts } productInChart = { productInChart } setProductInChart = { setProductInChart }/>
           < ProductChart productInChart = { productInChart } setProductInChart = { setProductInChart } />
         </div>
        
     )
    
}

export default Home