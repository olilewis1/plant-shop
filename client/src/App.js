import React from 'react';
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import Home from './components/Home.js'
import NavbarHomepage from './components/NavbarHomepage.js';
import Footer from './components/Footer.js';
import Shop from './components/Shop.js';
import NavbarNoImage from './components/NavbarNoImage.js';
import './App.css';


const App = () => (
<BrowserRouter> 
{ useLocation.path === "/shop" ? <NavbarNoImage /> : <NavbarHomepage />  }
<Routes> 
<Route path='/' element={<Home />}> 
</Route>
<Route path='/shop' element={<Shop />}> 
</Route>
</Routes>
<Footer />
</BrowserRouter>
);

export default App;
