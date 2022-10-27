import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home.js'
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import './App.css';


const App = () => (
<BrowserRouter> 
<Navbar />
<Routes> 
<Route path='/' element={<Home />}> 
</Route>

</Routes>
<Footer />
</BrowserRouter>
);

export default App;
