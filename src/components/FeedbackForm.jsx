import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'

const FeedbackForm = ({handleAdd}) => {
    const [text,setText]=useState('')
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setMessage]=useState('')
    const [rating,setRating]=useState(3)

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
            handleAdd(newFeedback)
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