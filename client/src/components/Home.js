import React from 'react'
import mainImageHome from '../assets/Ventura_files/static1.squarespace.jpg'
import closeUpCoffeeImage from '../assets/Ventura_files/2015-08-11_home-goods-9-1143-detail-FINAL.jpg'
const Home = () => {
  return (
    <div >
      <div className=''> 
        <img src={mainImageHome} alt='bo' className="img-fluid h-50"/>
      </div>
      <div className='container'> 
      <div class="row m-5 p-5 d-flex justify-content-center"> 
        <h1 className="text-center w-50 ">Brightening homes with unique, durable products.</h1>
      </div>
      <div class="container d-flex justify-content-evenly w-75"> 
        <div className="w-50"> 
          <img src={closeUpCoffeeImage}  alt='hi' className='img-fluid'/>
        </div>
        <div className='d-flex flex-column justify-content-evenly '> 
          <div className="mt-4"> 
            <p>Featured</p>
          </div>
          <div> 
            <img src='middleimage.jpg' alt='hi'/>
          </div>
          <div>
            <p> Golden Mist Pair</p>
          </div>
          <div>
            <p>$50.00</p>
          </div>
          <div className='mb-3'>
            <button>Shop All</button>
          </div>
        </div>
      </div>
      <div> 
        <div>
          <img src='corecollection.jpg' alt='hi' />
          <p>Explore</p>
          <p>The Core Collection</p>
        </div>
        <div> 
          <img src='setsandpairs.jpg' alt='hi'/>
          <p>Start Fresh</p>
          <p>Sets and Pairs</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home