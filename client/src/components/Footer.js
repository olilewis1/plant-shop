import React from 'react'

const Footer = () => {
  return (
    <div className='m-5 p-5'>
      <div> 
        <h1>Love-Mambo</h1>
      </div>
      <div className='d-flex flex-row justify-content-between mt-5'> 
        <div >
        <p> Made by OLDevelopments</p>
           </div>
           <div className='Container'> 
           <div className='row'> 
           <div className='col'>
           <p><u>Shop</u></p>
            </div>
          <div className='col'> 
            <p><u>Contact</u></p>
            </div>
            </div>
            <div className='row'>
              <div className='col'>
              <p><u>About</u></p>
                 </div>
            <div className='col'>
            <p><u>Email</u></p> </div>

            </div>
           </div>
        
      </div>
      <div className='mt-2'> 
      <a href='facebook.com'><i class="bi bi-instagram pe-2"></i>    </a>
      <i class="bi bi-facebook pe-2"></i>    
      <i class="bi bi-github"></i>
      </div>
    </div>
  )
}

export default Footer