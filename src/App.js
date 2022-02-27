import React from 'react'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/feedbackList'
import feedbackData from './data/feedbackData'
import FeedbackStats from './components/feedbackStats'
import FeedbackForm from './components/FeedbackForm'


const App = () => {
  const deleteFeedback=(id)=>{
    if(window.confirm('are you sure')){
      setFeedback(feedaback.filter((item)=>item.id !==id))
    }
      
  }
    const [feedaback,setFeedback]=useState(feedbackData)

    const addFeedBack=(newFeedback)=>{
        newFeedback.id=uuidv4()
        setFeedback([newFeedback,...feedaback])
    }
  return (
      <>
    <Header/>
    <div className="container">
      <FeedbackForm handleAdd={addFeedBack}/>
        <FeedbackStats feedback={feedaback}/>
     <FeedbackList feedback={feedaback} handleDelete={deleteFeedback}/> 
    </div>
    </>
  )
}

export default App