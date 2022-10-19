import react, { useEffect } from "react";
import { json } from "react-router-dom";

const AddProduct = () => {
  // data collect in states
  const [name, setName] = react.useState("");
  const [price, setPrice] = react.useState("");
  const [category, setCategory] = react.useState("");
  const [company, setCompany] = react.useState("");
  const [error, setError] = react.useState(false);

  const addProduct = async ()=>{

       // console.log(!name);
    if (!name || !price || !category || !company){
     setError(true);
     return false;
    } 
    // return false; //[After that, there is no statement work where set'return false'.]
    console.log(name,price,category,company);
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    // console.log(userId);
    let result = await fetch("http://localhost:3000/add-product",{
      method: "post",
      body: JSON.stringify({name,price,category,company,userId}),
      headers: {"Content-Type":"application/json"}
    });
    result = await result.json();
    if(result){
      alert("Record added");

    }
  }
  return (
    <div className="addProduct">
      <h1>Add Product</h1>
      <input type="text" placeholder="Enter Product Name" className="inputbox"
      value={name} onChange={(e)=>setName(e.target.value)} />
      { error && !name && <span className="invalid-input">Enter valid name</span>}

      <input type="texts" placeholder="Enter Product Price" className="inputbox"
      value={price} onChange={(e)=>setPrice(e.target.value)}/>
      { error && !price && <span className="invalid-input">Enter valid price</span>}

      <input type="text" placeholder="Enter Product Category" className="inputbox"
      value={category} onChange={(e)=>setCategory(e.target.value)}/>
      { error && !category && <span className="invalid-input">Enter valid category</span>}

      <input type="text" placeholder="Enter Product Company" className="inputbox"
      value={company} onChange={(e)=>setCompany(e.target.value)} />
      { error && !company && <span className="invalid-input">Enter valid company</span>}

      <button onClick={addProduct} className="button">Add Product</button>
    </div>
  );
};
  
export default AddProduct;
