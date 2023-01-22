import React from 'react'
//import mainImageHome from '../assets/Ventura_files/static1.squarespace.jpg'
const NavbarHomepage = () => {
  return (
    <div className='nav-home text-light'>
  {/* <div className=''> 
    <img src={mainImageHome} alt='bo' className="img-fluid h-50"/>
  </div>  */}
    <div className='d-flex flex-row justify-content-between navbar navbar-expand-sm  navbar-expand-sm  navbar-light '>
     
     
      <div className='ms-5'> 
        <h1>Love-Mambo</h1>
      </div>
      <div className='d-flex flex-row me-5 justify-content-center mt-3 mw-100'> 
        <h5 className='me-3'>Shop</h5>
        <h5 className='me-3'>About</h5>
        <h5 className='me-3'>Contact</h5>
        <h5 className='me-3'>Insta</h5>
        <h5 className='me-3'>Face</h5>
        <h5 className='me-3'>Basket</h5>
      </div>
    </div>
    </div>
  )
}

export default NavbarHomepage