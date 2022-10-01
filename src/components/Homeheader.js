import React from 'react'
import  "./cart.css";

const Homeheader = () => {
  return (<>
  {/* <div className='opac' style={{position:"absolute",zIndex:"-2"}}> */}
  <div className='containers fixed-top  ' >
  
  <div className='Image' >
    <h4>Image</h4>
    </div>
    <div className='Name' >
    <h4>Name</h4>
    </div>
    
    <h4>Color</h4>
    <div className='Size'>
    <h4>Size</h4>
    </div>
   <div className='Category'>
   <h4>Category</h4>
   </div>
   <div className='Price'>
   <h4>Price</h4>
   </div>
    
    <div className='Stock'>
    <h4>In Stock</h4>
    </div>
   <div className='Buy'>
   <h4>Buy</h4>
   </div>
   {/* </div> */}
   
    </div>
    <hr/>

   



{/* <nav class="container navbar-light bg-light ">
 
    <span class="navbar-brand mb-0 h1">Image</span>
    <span class="navbar-brand mb-0 h1">Name</span>
    <span class="navbar-brand mb-0 h1">Color</span>
    <span class="navbar-brand mb-0 h1">Size</span>
    <span class="navbar-brand mb-0 h1">Category</span>
    <span class="navbar-brand mb-0 h1">Price</span>
    <span class="navbar-brand mb-0 h1">In Stock</span>
    <span class="navbar-brand mb-0 h1">Buy</span>
  
</nav> */}
    </>
  )
}

export default Homeheader
