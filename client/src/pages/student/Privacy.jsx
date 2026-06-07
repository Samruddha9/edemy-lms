import React from 'react'
import Footer from '../../components/student/Footer'

const Privacy = () => {
  return (
    <div className='min-h-screen'>
      <div className='md:px-36 px-8 py-20'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>Privacy Policy</h1>
        <p className='text-gray-500 mb-10'>Last updated: June 2024</p>
        <h2 className='text-xl font-semibold text-gray-800 mb-3'>1. Information We Collect</h2>
        <p className='text-gray-600 mb-6'>We collect information you provide directly to us, such as when you create an account, enroll in a course, or contact us for support.</p>
        <h2 className='text-xl font-semibold text-gray-800 mb-3'>2. How We Use Your Information</h2>
        <p className='text-gray-600 mb-6'>We use the information we collect to provide, maintain, and improve our services, process transactions, and respond to your comments and questions.</p>
        <h2 className='text-xl font-semibold text-gray-800 mb-3'>3. Information Sharing</h2>
        <p className='text-gray-600 mb-6'>We do not sell, trade, or rent your personal information to third parties.</p>
        <h2 className='text-xl font-semibold text-gray-800 mb-3'>4. Data Security</h2>
        <p className='text-gray-600 mb-6'>We implement appropriate security measures to protect your personal information against unauthorized access.</p>
        <h2 className='text-xl font-semibold text-gray-800 mb-3'>5. Contact Us</h2>
        <p className='text-gray-600 mb-6'>If you have any questions about this Privacy Policy, please contact us at support@edemy.com.</p>
      </div>
      <Footer />
    </div>
  )
}

export default Privacy