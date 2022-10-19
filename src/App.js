import './App.css';
import Nav from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer  from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/privateComponents';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';


function App() {
  return (
    <div
     className="App">
      <BrowserRouter>
      <Nav/>
    <Routes>
      
      <Route element ={<PrivateComponent/>}>  {/*set private component*/}
      <Route path='/' element={<ProductList/>}/>
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/update/:id' element={<h1>Update product component</h1>}/>
      <Route path='/logout' element={<h1>Logout product component</h1>}/>
      <Route path='/profile' element={<h1>profile product component</h1>}/>
      </Route>

      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login'  element={<Login/>}/>
    </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App; 
