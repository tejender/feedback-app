import React from 'react'

const feedbackStats = ({feedback}) => {

    //calculate ratings avg
    let avg = feedback.reduce((acc,cur)=>{
        return acc + cur.rating
    },0)/feedback.length

    avg = avg.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className='feedback-stats'>
        <h4>
            {feedback.length} reviews 
        </h4>
        <h4>Average Rating : {isNaN(avg)? 0:avg}</h4>
    </div>
  )
}

export default feedbackStats