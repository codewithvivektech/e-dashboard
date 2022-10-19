import react from "react";
import { json, Link,useNavigate } from "react-router-dom";

// functional component.
const Nav = () => {
    const Auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        // console.log('apple');
        localStorage.clear();
        navigate('/signup');
    }
  return (
    <div>
     <img  className="logo" alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu907ujnXt1ae1wVUDH8NrYtoLeeI5XCK7OsMU3HCw=s900-c-k-c0x00ffffff-no-rj"/>

      { Auth? <ul className="nav-ul">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add product</Link></li>
        <li><Link to="/update">Update product</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link onClick={logout} to="/signup">Logout[{JSON.parse(Auth).name}]</Link></li>
        {/* <li><Link to="/logout">Logout</Link></li> */}
        {/* <li>{Auth? <Link onClick={logout} to="/signup">Logout</Link> : <Link to="/signup">SignUp</Link>}</li> */}
        {/* <li><Link to="/login">Login</Link></li> */}
        {/* { Auth? <li><Link onClick={logout} to="signup">Logout</Link></li> :
        <> <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/login">Login</Link></li> </> } */}
      </ul> 
      :
      <ul className="nav-ul nav-right">
      <> <li><Link to="/signup">SignUp</Link></li>
         <li><Link to="/login">Login</Link></li> </>
      </ul>
    }
    </div>
  );
};

export default Nav;
