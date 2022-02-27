import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import Card from './shared/Card'
import Rating from './shared/Rating'


const FeedackItem = ({item,handleDelete}) => {
 
    // const[rating,setRating]=useState(7)
    // const[text,setText]=useState(' This is example of Feedback')
    
   
  return (
    <Card>
      
      <button  onClick={()=>handleDelete(item.id)} className="close">
        <FaTimes color='purple' />
      </button >
      <div className="text-display">
        {item.text}
      </div>
      <div className='rating-wrapper'> 
      <b >Rating :</b>
        <Rating rating={item.rating}/>
      </div>
    </Card>
  )
}

export default FeedackItem