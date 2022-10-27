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
           <p>Shop</p>
            </div>
          <div className='col'> 
            <p>Contact</p>
            </div>
            </div>
            <div className='row'>
              <div className='col'>
              <p>About</p>
                 </div>
            <div className='col'>
            <p>Email</p> </div>

            </div>
           </div>
        
      </div>
      <div className='mt-2'> 
        <icon className='pe-2'> 
          Insta
        </icon>      
          <icon className='pe-2'> 
          Face
        </icon>       
         <icon> 
          Twit
        </icon>
      </div>
    </div>
  )
}

export default Footer