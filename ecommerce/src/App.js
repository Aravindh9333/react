import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddUser from './Components/AddUser';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './Components/Welcome';
import Admin from './Components/AdminHeader';
import ViewAllUsers from './Components/ViewAllUsers';
import BlockUsers from './Components/BlockUsers';
import UnBlock from './Components/UnBlock';
import AddProduct from './Components/AddProduct';
import ViewAllProducts from './Components/ViewAllProducts';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' Component={Welcome}></Route>
          <Route path='/admin' Component={Admin}/>
        <Route path='/admin/adduser' Component={AddUser}></Route>
        <Route path='/admin/viewallusers' Component={ViewAllUsers}></Route>
        <Route path='/admin/blockusers' Component={BlockUsers}></Route>
        <Route path='/admin/unblockusers' Component={UnBlock}></Route>
        <Route path='/admin/addproduct' Component={AddProduct}></Route>
        <Route path='/admin/viewallproducts' Component={ViewAllProducts}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
