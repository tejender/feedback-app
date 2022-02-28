import React from 'react'
import { useContext } from 'react'
import { useState,useEffect } from 'react'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
    const [text,setText]=useState('')
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setMessage]=useState('')
    const [rating,setRating]=useState(3)
    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit===true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleTextChange=(e)=>{
        if(text===''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10 ){
                       setMessage('Collect your thoughts and write more than 10 chars')
                       setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length>10 && rating !==''){
            const newFeedback={
                text,
                rating
            }
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }else{
                addFeedback(newFeedback)
            }
            
            setText('')
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className="input-group">
            <input type="text" name="review" value={text} 
            onChange={handleTextChange} id="" placeholder='Write a Review' />
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}    
        </form>
    </Card>
  )
}

export default FeedbackForm