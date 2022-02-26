import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/feedbackList'
import feedbackData from './data/feedbackData'
import FeedbackStats from './components/feedbackStats'

const App = () => {
  const deleteFeedback=(id)=>{
    if(window.confirm('are you sure')){
      setFeedback(feedaback.filter((item)=>item.id !==id))
    }
      
  }
    const [feedaback,setFeedback]=useState(feedbackData)
  return (
      <>
    <Header/>
    <div className="container">
        <FeedbackStats feedback={feedaback}/>
     <FeedbackList feedback={feedaback} handleDelete={deleteFeedback}/> 
    </div>
    </>
  )
}

export default App