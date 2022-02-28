import React from 'react'
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useState } from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import Rating from './shared/Rating'


const FeedackItem = ({item}) => {
  const {deleteFeedback} = useContext(FeedbackContext)  
    const {editFeedback} = useContext(FeedbackContext)    
   
  return (
    <Card>
      
      <button  onClick={()=>deleteFeedback(item.id)} className="close">
        <FaTimes color='purple' />
      </button >
      <button  onClick={()=>editFeedback(item)} className="edit">
        <FaEdit color='purple' />
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