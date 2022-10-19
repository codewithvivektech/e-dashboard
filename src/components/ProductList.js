import react, { useEffect, useState } from "react";
import {Link, link} from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:3000/products");
    result = await result.json();
    setProducts(result);
  };
  // console.log(products);

  let deleteProduct = async (id)=>{
    // alert(id)
    let result = await fetch(`http://localhost:3000/product/${id}`,{
      method: "delete"
    });
    result = await result.json()
    if(result){
      alert('record deleted')
      getProducts();  
    }
  };
  
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {products.map((item,index)=>(
        <ul>
          <li>{index+1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <button onClick={()=>deleteProduct(item._id)}>Delete</button>
            <button><Link to={"/update/"+item._id}>Update</Link></button>
            </li>
          
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
