import react from 'react';
import { Navigate,Outlet } from 'react-router-dom'; 

const PrivateComponent = ()=>{
    const Auth = localStorage.getItem('user');  
    return Auth?<Outlet/>: <Navigate to="/signup"/>
    // return <Outlet/>
}

export default PrivateComponent