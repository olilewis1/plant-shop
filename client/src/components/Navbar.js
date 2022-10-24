import React from 'react'

const Navbar = () => {
  return (
    <div className='d-flex flex-row justify-content-between navbar navbar-expand-lg navbar-fixed-top nav shadow-5-strong'>
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
  )
}

export default Navbar