import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const Auth = localStorage.getItem("user");
    if (Auth) {
      navigate("/");
    }
  });

  const CollectData = async () => {
    // console.log(name, email, password);
    let result = await fetch("http://localhost:3000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {"Content-Type": "application/json"}
    });
    //console.log(reult); //result is in readable stream so that's why use .json() after that result.json() function return promises .
    result = await result.json(); //[result(readstream)]
    console.log(result);
    localStorage.setItem("user", JSON.stringify({ result }));
    navigate("/");
  };
  return (
    <div className="register">
      <h1>Register</h1>

      <input className="inputbox" type="text"  placeholder="Enter Name"
      onChange={(e) => setName(e.target.value)} value={name}/>

      <input className="inputbox" type="email" placeholder="Enter Email"
       onChange={(e) => setEmail(e.target.value)} value={email}/>

      <input className="inputbox" type="password" placeholder="Enter Password" 
      onChange={(e) => setPassword(e.target.value)} value={password}/>

      <button onClick={CollectData} className="button" type="button">SignUp</button>
    </div>
  );
};

export default SignUp;
