import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = react.useState("");
    const [password,setPassword] = react.useState("");
    const navigate = useNavigate();
    useEffect(()=>{
      const auth =localStorage.getItem("user");
      if(auth){
        navigate("/");
      }
    })
    const handlelogin = async ()=>{
        // console.log("email,password",email,password)
        let result = await fetch('http://localhost:3000/login',{
         method:"post",
         body:JSON.stringify({email,password}),
         headers:{"Content-Type":"application/json"}
        })
        result = await result.json();
        console.log(result);
        if(result.name){
          localStorage.setItem("user",JSON.stringify(result));
          navigate('/');
        }
        else{
          alert("Please Enter Correct Details");
        }
    }
  return (
    <div className="login">
        <h1>User Login</h1>
      <input type="email" className="inputbox" placeholder="Enter email"
      onChange={(e)=>setEmail(e.target.value)} value={email}/>

      <input type="password" className="inputbox" placeholder="Enter password"
      onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <button onClick={handlelogin} className="button">Login</button>
    </div>
  );
};

export default Login;
