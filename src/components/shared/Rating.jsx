import React from 'react'

import  {FaStar} from  'react-icons/fa'

const Rating = ({rating}) => {
  return (
    <>{(rating===1) && (<div className='stars'> <FaStar/></div>)}
        {(rating===2) && (<div className='stars'><FaStar/> <FaStar/></div>)}
        {(rating===3) && (<div className='stars'><FaStar/> <FaStar/> <FaStar/></div>)}
        {(rating===4) && (<div className='stars'><FaStar/> <FaStar/> <FaStar/> <FaStar/></div>)}
        {(rating===5) && (<div className='stars'><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></div>)}</>
  )
}

export default Rating