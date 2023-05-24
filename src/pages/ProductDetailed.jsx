import React, { useState, useEffect } from 'react'
import ProductDetails from '../components/productDetails/ProductDetails'
import { useParams } from 'react-router-dom';
import getData from '../helpers/getData';
import getDataById from '../helpers/getDataById';

const ProductDetailed = () => {
  
  const { id } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    getData();
  }, [id]);
  
 const getData = () => {
  getDataById(id)
  .then((product) => {
    setProducts(product);
  })
  .catch((error) => console.error(error));
 };
  
  return (
    <div>
     < ProductDetails data = { products } />
    </div>
  )
}

export default ProductDetailed