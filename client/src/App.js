import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home.js'


import './App.css';


const App = () => (
<BrowserRouter> 
<Routes> 
<Route path='/' element={<Home />}> 
</Route>

</Routes>

</BrowserRouter>
);

export default App;
