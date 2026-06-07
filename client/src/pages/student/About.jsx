import React from 'react'
import Footer from '../../components/student/Footer'

const About = () => {
  return (
    <div className='min-h-screen'>
      <div className='md:px-36 px-8 py-20'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>About Us</h1>
        <p className='text-gray-600 text-lg mb-4'>
          Welcome to Edemy — your destination for high-quality online learning.
        </p>
        <p className='text-gray-600 mb-4'>
          We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals. Whether you're looking to advance your career, explore a new hobby, or gain expertise in a specific field, Edemy has the courses you need.
        </p>
        <p className='text-gray-600 mb-4'>
          Our mission is to make quality education accessible to everyone, everywhere. We partner with expert instructors from around the world to deliver engaging, practical, and up-to-date courses across a wide range of topics.
        </p>
        <h2 className='text-2xl font-semibold text-gray-800 mt-10 mb-4'>Our Values</h2>
        <ul className='list-disc pl-6 text-gray-600 space-y-2'>
          <li>Quality education for everyone</li>
          <li>Expert-led, practical courses</li>
          <li>Supportive learning community</li>
          <li>Continuous improvement and innovation</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default About