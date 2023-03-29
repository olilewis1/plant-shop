import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home.js'
import NavbarHomepage from './components/NavbarHomepage.js';
import Footer from './components/Footer.js';
import Shop from './components/Shop.js';
import About from './components/About.js'
import './App.css';



const App = () => (
<BrowserRouter> 
 <NavbarHomepage />  
<Routes> 
<Route path='/' element={<Home />}> 
</Route>
<Route path='/shop' element={<Shop />}> 
</Route>
<Route path='/about' element={<About />}>
  </Route>
</Routes>
<Footer />
</BrowserRouter>
);

export default App;
