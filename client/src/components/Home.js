import React from 'react'
import mainImageHome from '../assets/Ventura_files/static1.squarespace.jpg'
const Home = () => {
  return (
    <div>
      <div> 
        <img src={mainImageHome} alt='bo' />
      </div>
      <div> 
        <p>Brightening homes with unique, durable products.</p>
      </div>
      <div> 
        <div> 
          <img src='hi.jpg' alt='hi' />
        </div>
        <div> 
          <div> 
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
          <div>
            <button>Shop All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home