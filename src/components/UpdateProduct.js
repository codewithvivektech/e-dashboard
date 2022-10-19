import react from "react";

const updateProduct = ()=>{
    const [name, setName] = react.useState("");
    const [price, setPrice] = react.useState("");
    const [category, setCategory] = react.useState("");
    const [company, setCompany] = react.useState("");

    return(
        <div>
            <h1>UPDATE PRODUCT</h1>
            <input type="text" placeholder="Enter product Name" className="inputbox" 
             value={name} onChange={(e)=>setName(e.target.value)} />

             <input type="text" placeholder="Enter product Price" className="inputbox"
              value={price} onChange={(e)=>setPrice(e.target.value)} />

            <input type="text" placeholder="Enter product Category" className="inputbox"
             value={category} onChange={(e)=>setCategory(e.target.value)} />

             <input type="text" placeholder="Enter product Company"  className="inputbox"
             value={company} onChange={(e)=>setCompany(e.target.value)} />    


        </div>
    )
}
