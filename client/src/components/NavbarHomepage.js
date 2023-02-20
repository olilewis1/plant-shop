import React from 'react'
import { counterActions } from '../Store/index'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
//import mainImageHome from '../assets/Ventura_files/static1.squarespace.jpg'
const NavbarHomepage = () => {
  const dispatch = useDispatch();
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

  };
 const counterState =  useSelector((state) => state.counter) 
 


  return (
    <div> 
      {counterState.counter ?     <div className='nav-home text-light'>
  {/* <div className=''> 
    <img src={mainImageHome} alt='bo' className="img-fluid h-50"/>
  </div>  */}
    <div className='d-flex flex-row justify-content-between navbar navbar-expand-sm  navbar-expand-sm  navbar-light '>
     
     
      <div className='ms-5' > 
        <Link to='/' name='two' onClick={incrementHandler} className="btn text-light btn-outline-* fs-1 ">Love-Mambo</Link>
      </div>
      <div className='d-flex flex-row me-5 justify-content-center 
      mw-100'> 
        <Link to='/shop' onClick={incrementHandler} className='me-3 btn text-light btn-outline-* fs-4 ' name='one'>Shop</Link>
        <Link to='/about' onClick={incrementHandler} className='me-3 btn text-light btn-outline-* fs-4 ' name='one' >About</Link>
        <Link to='/contact' onClick={incrementHandler} className='me-3 btn text-light btn-outline-* fs-4 ' name='one'>Contact</Link>
        <a  href='https://www.bbc.co.uk'  onClick={incrementHandler} className='me-3 btn text-light btn-outline-* fs-4 ' name='one'>Insta</a>
        <a  href='https://www.bbc.co.uk'  onClick={incrementHandler} className='me-3 btn text-light btn-outline-* fs-4 ' name='one'>Face</a>
        <Link to='/basket' onClick={incrementHandler} className='me-3 btn text-light btn-outline-* fs-4 ' name='one'>Basket</Link>
      </div>
    </div>
    </div> : 
    
    
<div className='nav-home-No-Image text-dark'>
  {/* <div className=''> 
    <img src={mainImageHome} alt='bo' className="img-fluid h-50"/>
  </div>  */}
    <div className='d-flex flex-row justify-content-between navbar navbar-expand-sm  navbar-expand-sm  navbar-light '>
     
     
      <div className='ms-5' > 
        <Link to='/' name='two' onClick={incrementHandler} className="btn text-dark btn-outline-* fs-1 ">Love-Mambo</Link>
      </div>
      <div className='d-flex flex-row me-5 justify-content-center 
      mw-100'> 
        <Link to='/shop' onClick={incrementHandler} className='me-3 btn text-dark btn-outline-* fs-4 ' name='one'>Shop</Link>
        <Link to='/about' onClick={incrementHandler} className='me-3 btn text-dark btn-outline-* fs-4 ' name='one' >About</Link>
        <Link to='/contact' onClick={incrementHandler} className='me-3 btn text-dark btn-outline-* fs-4 ' name='one'>Contact</Link>
        <a  href='https://www.bbc.co.uk'  onClick={incrementHandler} className='me-3 btn text-dark btn-outline-* fs-4 ' name='one'>Insta</a>
        <a  href='https://www.bbc.co.uk'  onClick={incrementHandler} className='me-3 btn text-dark btn-outline-* fs-4 ' name='one'>Face</a>
        <Link to='/basket' onClick={incrementHandler} className='me-3 btn text-dark btn-outline-* fs-4 ' name='one'>Basket</Link>
      </div>
    </div>
    </div>}

    </div>
  )
}

export default NavbarHomepage