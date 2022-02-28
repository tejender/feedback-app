import React from 'react'
import { FeedbackProvider } from './context/FeedbackContext'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'


const App = () => {
      return (
    <FeedbackProvider>
      <>
    <Header/>
    <div className="container">
      <FeedbackForm/>
        <FeedbackStats/>
     <FeedbackList /> 
    </div>
    </>
    </FeedbackProvider>
  )
}

export default App