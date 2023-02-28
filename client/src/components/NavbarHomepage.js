import React, { useState } from 'react'
import "bootstrap/js/src/collapse.js";
import { counterActions } from '../Store/index'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav'
import { Link, useLocation } from 'react-router-dom'
//import mainImageHome from '../assets/Ventura_files/static1.squarespace.jpg'
const NavbarHomepage = () => {
  const dispatch = useDispatch();
  const location = useLocation()

console.log(location)
   if (location.pathname === '/') {
    dispatch(counterActions.decrement())
    console.log('hissss')
  }
 const [toggleNavClass, setToggleNavClass ] = useState(true)
 
  const incrementHandler = (event) => {
    console.log(event.target.name);
    if (event.target.name === "one") {
      dispatch(counterActions.increment())
    }
    if (event.target.name === "two") {
      dispatch(counterActions.decrement())
    }
    if (event.target.name === "three") {
      dispatch(counterActions.toggleCounter())
    }
    const falseTog = false 
    const trueTog = true
    if (toggleNavClass === true) { 
      console.log('hi', toggleNavClass)
      setToggleNavClass(falseTog)
    }
    if (toggleNavClass === false) { 
      setToggleNavClass(trueTog)
    }
  };
 const counterState =  useSelector((state) => state.counter) 





  return (
    <div> 
      {counterState.counter ?     
      
      <div className='nav-home text-light'>
        
        
      <Nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid "> <Link to='/' name='two' onClick={incrementHandler} className="btn text-light btn-outline-* fs-1 navbar-brand">Love-Mambo</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class={ `${!toggleNavClass ? ' ' : 'Show'} collapse navbar-collapse justify-content-md-end`} id="navbarTogglerDemo02">

      <div class="navbar-nav d-sm-flex align-items-start" >

      <Link to={'/shop'} onClick={incrementHandler} className='me-3 btn text-light btn-outline-* fs-4 nav-item' name='one'  >Shop</Link>
        <Link to='/about' onClick={incrementHandler} className='me-3 btn text-light btn-outline-* fs-4 nav-item' name='one' >About</Link>
        <Link to='/contact' onClick={incrementHandler} className='me-3 btn text-light btn-outline-* fs-4 nav-item' name='one'>Contact</Link>
        <a  href='https://www.bbc.co.uk'  onClick={incrementHandler} className='me-3 btn text-light btn-outline-* fs-4 nav-item' name='one'>Insta</a>
        <a  href='https://www.bbc.co.uk'  onClick={incrementHandler} className='me-3 btn text-light btn-outline-* fs-4 nav-item' name='one'>Face</a>
        <Link to='/basket' onClick={incrementHandler} className='me-3 btn text-light btn-outline-* fs-4 nav-item' name='one'>Basket</Link>
      </div>
    </div>
  </div>
</Nav>
        
  {/* <div className=''> 
    <img src={mainImageHome} alt='bo' className="img-fluid h-50"/>
  </div>  */}
    </div> : 
    
    <div className='nav-home-No-Image text-dark'>
      <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid "> <Link to='/' name='two' onClick={incrementHandler} className="btn  text-dark btn-outline-* fs-1 navbar-brand">Love-Mambo</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class={ `${!toggleNavClass ? ' ' : 'Show'} collapse navbar-collapse justify-content-md-end`} id="navbarTogglerDemo02">

      <div class="navbar-nav d-sm-flex align-items-start"  >

      <Link to='/shop' onClick={incrementHandler} className='me-3 btn  text-dark btn-outline-* fs-4 nav-item' name='one'  >Shop</Link>
        <Link to='/about' onClick={incrementHandler} className='me-3 btn  text-dark btn-outline-* fs-4 nav-item' name='one' >About</Link>
        <Link to='/contact' onClick={incrementHandler} className='me-3 btn  text-dark btn-outline-* fs-4 nav-item' name='one'>Contact</Link>
        <a  href='https://www.bbc.co.uk'  onClick={incrementHandler} className='me-3 btn  text-dark btn-outline-* fs-4 nav-item' name='one'>Insta</a>
        <a  href='https://www.bbc.co.uk'  onClick={incrementHandler} className='me-3 btn  text-dark btn-outline-* fs-4 nav-item' name='one'>Face</a>
        <Link to='/basket' onClick={incrementHandler} className='me-3 btn  text-dark btn-outline-* fs-4 nav-item' name='one'>Basket</Link>
      </div>
    </div>
  </div>
</nav>
        </div>}

    </div>
  )
}

export default NavbarHomepage