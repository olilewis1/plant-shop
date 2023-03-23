import React from 'react'
import shopImage from '../assets/shopimage.jpg'
const Shop = () => {
  return (
    <div>
      
      <div> 
        <p className='fs-1 text d-flex justify-content-center'> Shop</p>

      </div>
      <div className='container'>     
       <hr className=''></hr>  
      
      </div>

  <div className='container'>
<div className='row pt-5'> 
<div class="card col border-0" >
  <img class="card-img-top" src={shopImage} alt="Card image cap" />
  <div class="pt-4">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">$50.00</p>
    <button  class="btn btn-dark">Buy Now</button>

</div>
</div>
      <div class="card col border-0" >
  <img class="card-img-top" src={shopImage} alt="Card image cap" />
  <div class="pt-4">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">$50.00</p>
    <button  class="btn btn-dark">Buy Now</button>

</div>
</div>

<div class="card col border-0" >
  <img class="card-img-top" src={shopImage} alt="Card image cap" />
  <div class="pt-4">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">$50.00</p>
    <button  class="btn btn-dark">Buy Now</button>

</div>
</div>
</div>
<div className='row pt-5'> 
<div class="card col border-0" >
  <img class="card-img-top" src={shopImage} alt="Card image cap" />
  <div class="pt-4">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">$50.00</p>
    <button  class="btn btn-dark">Buy Now</button>

</div>
</div>
      <div class="card col border-0" >
  <img class="card-img-top" src={shopImage} alt="Card image cap" />
  <div class="pt-4">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">$50.00</p>
    <button  class="btn btn-dark">Buy Now</button>

</div>
</div>

<div class="card col border-0" >
  <img class="card-img-top" src={shopImage} alt="Card image cap" />
  <div class="pt-4">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">$50.00</p>
    <button  class="btn btn-dark">Buy Now</button>

</div>
</div>
</div>

      </div>
    </div>
  )
}

export default Shop