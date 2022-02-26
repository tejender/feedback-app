import React from 'react'
import FeedackItem from './FeedbackItem'
function feedbackList({feedback,handleDelete}) {
    if(!feedback  || feedback.length===0){
        return <p>No feedback</p>
    }
  return (
    <div className='feedback-list'>
        {
             
            feedback.map((item)=>(
               
              <FeedackItem key={item.id} item={item} handleDelete={handleDelete}/>
            ))
        }
    </div>
  )
}

export default feedbackList