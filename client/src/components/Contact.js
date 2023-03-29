import React from 'react'
import FadeIn from 'react-fade-in'
const Contact = () => {
  return (
    <>
    <FadeIn delay={100}> 
    <div className='container '>
      <div className='row justify-content-center'> 
      <div className='col-sm-4'> 
        <h1> Get In Touch
        </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <h3>lovemambo@enquiries.com</h3>
        <h3>(555) 555-5555</h3>
      </div>
      <div className='col-sm-4'> 
      <form>
  <div class="form-group ">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
    </div>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput">Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" />
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput">Subject</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Subject" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Comment</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="form-group row">
   
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1" />
        <label class="form-check-label" for="gridCheck1">
         Agree to share details with Love Mambo
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-dark">Send</button>
    </div>
  </div>
</form>
        </div>
        </div>


    </div>
    </FadeIn>
<div className='home'> 
<div className=' position-relative mt-5  image-email-enter'> 
<div className=''>
    </div>
    <div className='position-absolute top-50 start-50 translate-middle text-center'>
    <h1 className='  text-light mb-5'>Monthly Dispatch</h1>
    <h4 className=' text-light'>Sign up to receive news and updates.</h4>
    <div className='d-flex mt-5 needs-validation' > 
    <div className='w-75  me-2'>    
      <input type="email" class="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" /> 
    </div>
    

<button type="submit" class="btn btn-primary w-25">Submit</button>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Contact