import React from 'react'
import mainImageHome from '../assets/Ventura_files/static1.squarespace.jpg'
//import closeUpCoffeeImage from '../assets/Ventura_files/2015-08-11_home-goods-9-1143-detail-FINAL.jpg'
import closeUpFlowerImage from '../assets/Photo 31-8-2022, 2 32 22 pm (1).jpg'
import closeUpFlowersLookingGood from '../assets/Photo 4-7-2022, 12 06 24 pm.jpg'
import flowersBottomImageLeft from '../assets/Photo 14-7-2022, 10 21 55 am.jpg'
import flowersBottomImageRight from '../assets/Photo 17-7-2022, 2 10 31 pm.jpg'
const Home = () => {
  return (
    <div className='home' >
      <div className=''> 
        <img src={mainImageHome} alt='bo' className="img-fluid h-50"/>
      </div>
      <div className='container'> 
      <div class="row m-5 p-5 d-flex justify-content-center"> 
        <h1 className="text-center w-50 ">Brightening homes with unique, durable products.</h1>
      </div>
      <div class="container d-flex justify-content-evenly mb-5 "> 
        <div className="w-50"> 
          <img src={closeUpFlowersLookingGood}  alt='hi' className='img-fluid'/>
        </div>
        <div className='d-flex flex-column justify-content-evenly w-25 text-center'> 
          <div className="mt-4"> 
            <p className='h6'>Featured</p>
          </div>
          <div className=""> 
            <img src={closeUpFlowerImage} alt='hi' className='img-fluid'/>
          </div>
          <div>
            <p className='lead'> Golden Mist Pair</p>
          </div>
          <div>
            <p className='lead'>$50.00</p>
          </div>
          <div className='mb-3'>
            <button className="btn btn-dark">Shop All</button>
          </div>
        </div>
      </div>
      <div className='container d-flex justify-content-around mt-5'> 
        <div className=' p-2 position-relative' >
          <img src={flowersBottomImageLeft} alt='hi' className='img-fluid  ' />
          <div className='position-absolute bottom-0 start-0 p-5'> 
          <h4 className='text-light'>Explore</h4>
          <h1 className='text-light'>The Core Collection</h1>
            </div>       
        </div>
        <div className=' position-relative p-2'> 
          <img src={flowersBottomImageRight} alt='hi' className='img-fluid '/>
          <div className='position-absolute bottom-0 start-0 p-5'>
          <h4 className='  text-light'>Start Fresh</h4>
          <h1 className=' text-light'>Sets and Pairs</h1>
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Home