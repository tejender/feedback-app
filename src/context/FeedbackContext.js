
import {v4 as uuidv4} from 'uuid'
import { createContext } from "react";
import { useState } from "react";
import FeedbackData from '../data/FeedbackData' 

const FeedbackContext = createContext()


export const FeedbackProvider = ({children})=>{

    const [feedback,setFeedback]=useState(FeedbackData)
    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    })

    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    const addFeedback=(newFeedback)=>{
        newFeedback.id=uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    const deleteFeedback=(id)=>{
        if(window.confirm('are you sure')){
        setFeedback(feedback.filter((item)=>item.id !==id))
        }     
        
  }
  const updateFeedback=(id,updItem)=>{
            setFeedback(feedback.map((item)=>
                item.id===id ? {...item,...updItem}:item
            ))
        }

    return <FeedbackContext.Provider value={
        { feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback
        }
       
    }>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
