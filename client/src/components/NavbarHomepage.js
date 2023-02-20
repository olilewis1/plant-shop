import React from 'react'
import { counterActions } from '../Store/index'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
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
 console.log('counter', counterState)
  return (
    <div> 
      {counterState.counter ?     <div className='nav-home text-light'>
  {/* <div className=''> 
    <img src={mainImageHome} alt='bo' className="img-fluid h-50"/>
  </div>  */}
    <div className='d-flex flex-row justify-content-between navbar navbar-expand-sm  navbar-expand-sm  navbar-light '>
     
     
      <div className='ms-5' > 
        <button name='two' onClick={incrementHandler}>Love-Mambo</button>
      </div>
      <div className='d-flex flex-row me-5 justify-content-center mt-3 mw-100'> 
        <button onClick={incrementHandler} className='me-3' name='one'>Shop</button>
        <h5 onClick={incrementHandler} className='me-3' name='one' >About</h5>
        <h5 onClick={incrementHandler} className='me-3' name='one'>Contact</h5>
        <h5 onClick={incrementHandler} className='me-3' name='one'>Insta</h5>
        <h5 onClick={incrementHandler} className='me-3' name='one'>Face</h5>
        <button onClick={incrementHandler} className='me-3' name='three'>Basket</button>
      </div>
    </div>
    </div> : 
    
    
    <div className='nav-home-No-Image text-light'>
    {/* <div className=''> 
      <img src={mainImageHome} alt='bo' className="img-fluid h-50"/>
    </div>  */}
      <div className='d-flex flex-row justify-content-between navbar navbar-expand-sm  navbar-expand-sm  navbar-light '>
       
       
        <div className='ms-5' > 
          <button name='two' onClick={incrementHandler}>Love-Mambo</button>
        </div>
        <div className='d-flex flex-row me-5 justify-content-center mt-3 mw-100'> 
          <button onClick={incrementHandler} className='me-3' name='one'>Shop</button>
          <h5 onClick={incrementHandler} className='me-3' name='one' >About</h5>
          <h5 onClick={incrementHandler} className='me-3' name='one'>Contact</h5>
          <h5 onClick={incrementHandler} className='me-3' name='one'>Insta</h5>
          <h5 onClick={incrementHandler} className='me-3' name='one'>Face</h5>
          <button onClick={incrementHandler} className='me-3' name='three'>Basket</button>
        </div>
      </div>
      </div> }

    </div>
  )
}

export default NavbarHomepage