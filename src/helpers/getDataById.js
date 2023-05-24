const getProductById = async (productId) => {
   
    const url= `https://fakestoreapi.com/products/${productId}`
    console.log( url)
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.status + " " + response.statusText);
  
      const data = await response.json();
    
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export default getProductById;
  