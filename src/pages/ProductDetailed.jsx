import React, { useState, useEffect } from 'react'
import ProductDetails from '../components/productDetails/ProductDetails'
import { useParams } from 'react-router-dom';
import getData from '../helpers/getData';
import getDataById from '../helpers/getDataById';

const ProductDetailed = () => {
  
  const  {idProducto} = useParams();
  console.log(idProducto);

  const [products, setProducts] = useState({});
  useEffect(() => {
    getData();
  }, [idProducto]);

 
  
 const getData = () => {
  getDataById(idProducto)
  .then((product) => {
    setProducts(product);
  })
  .catch((error) => console.error(error));
 };

 console.log(products)
  
  return (
    <div>
     < ProductDetails data = { products } />
    </div>
  )
}

export default ProductDetailed