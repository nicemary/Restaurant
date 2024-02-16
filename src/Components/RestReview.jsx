import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { UseSelector, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function RestReview() {
  // console.log("====1==");
  // console.log(selectedRestuarant);
  // const reviews=selectedRestuarant?.reviews;
  // console.log(reviews);
  const {id}=useParams();
    const allRestaurant=useSelector(state=>state.restuarantSlice.allRestaurant);
    const selectedRestuarant=allRestaurant?.filter(item=>item.id==id)
    const reviews=selectedRestuarant[0].reviews;
    console.log("reviews");
    console.log(reviews);
  const [open, setOpen] = useState(false);
  return (
<>
<button   onClick={() => setOpen(!open)} className='btn btn-warning ms-3'>Click here to see Reviews</button>
<Collapse in={open}>
  
<div className='my-2'>
    <hr/>
    {
      reviews?.length>0?
      reviews.map((item)=>(


      
   
    <div className='mt-5'>
        <h6>Name:<span className='ms-3 text-warning'>{item.name}</span></h6>
        <h6>Rating:<span className='ms-3 text-warning'>{item.rating}</span></h6>
        <h6>Date:<span className='ms-3 text-warning'>{item.date}</span></h6>
        <p>Description:<span className='ms-3 text-warning'>{item.comments}</span></p>
    <hr/>
     </div>

    )):
    <p>No Reviews selectes</p>
  }
</div>
</Collapse>





</>


  )
}

export default RestReview
