import React from 'react'
import { loading } from '../assets'

const Generating = ({className}) => {
  return (
    <div className={` flex items-center h-[4.5rem] px-6 bg-n-8/80 rounded-[1.7rem]  ${className||""} text-base `}>
      <img className='w-5 h-5 mr-4 '  src={loading} alt='Loading...'  />
      Ai is generating...
    </div>
  )
}

export default Generating
