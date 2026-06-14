import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const CallToAction = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='md:text-4xl text-xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'>Join thousands of learners who are already advancing their careers. Start your learning journey today with expert-led courses designed to help you succeed.</p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button 
          onClick={() => { navigate('/course-list'); scrollTo(0, 0) }}
          className='px-10 py-3 rounded-md text-white bg-blue-600'>
          Get started
        </button>
        <button 
          onClick={() => { navigate('/learn-more'); scrollTo(0, 0) }}
          className='flex items-center gap-2'>
          Learn more
          <img src={assets.arrow_icon} alt="arrow_icon" />
        </button>
      </div>
    </div>
  )
}

export default CallToAction