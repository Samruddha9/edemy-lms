import React from 'react'
import Footer from '../../components/student/Footer'
import { useNavigate } from 'react-router-dom'

const LearnMore = () => {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen'>

      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-8 md:px-36 text-center'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6'>Why Choose Edemy?</h1>
        <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
          Edemy is not just a learning platform — it is a career transformation engine. 
          Every course you complete brings you one step closer to your dream career.
        </p>
        <button
          onClick={() => { navigate('/course-list'); scrollTo(0, 0) }}
          className='mt-8 px-10 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50'
        >
          Explore Courses
        </button>
      </div>

      {/* Value Proposition Section */}
      <div className='md:px-36 px-8 py-16'>
        <h2 className='text-3xl font-bold text-gray-800 text-center mb-4'>
          How Edemy Adds Value to Your Knowledge
        </h2>
        <p className='text-gray-500 text-center max-w-3xl mx-auto mb-12'>
          When you complete a course on Edemy, you don't just gain knowledge — you gain confidence, 
          skills, and a certificate that proves your expertise to the world.
        </p>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>

          <div className='bg-blue-50 border border-blue-100 rounded-xl p-6 text-center'>
            <div className='text-4xl mb-4'>🎓</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>Industry-Ready Skills</h3>
            <p className='text-gray-600 text-sm'>
              Our courses are designed by industry experts with real-world projects. 
              You learn exactly what employers are looking for — not just theory.
            </p>
          </div>

          <div className='bg-green-50 border border-green-100 rounded-xl p-6 text-center'>
            <div className='text-4xl mb-4'>📜</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>Verified Certificates</h3>
            <p className='text-gray-600 text-sm'>
              Upon completing any course, you receive a downloadable certificate of completion. 
              Share it on LinkedIn or your resume to stand out from the crowd.
            </p>
          </div>

          <div className='bg-purple-50 border border-purple-100 rounded-xl p-6 text-center'>
            <div className='text-4xl mb-4'>🚀</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>Career Acceleration</h3>
            <p className='text-gray-600 text-sm'>
              Edemy learners report 3x faster career growth. Whether you are switching careers 
              or climbing the ladder, our courses give you the edge you need.
            </p>
          </div>

          <div className='bg-yellow-50 border border-yellow-100 rounded-xl p-6 text-center'>
            <div className='text-4xl mb-4'>💡</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>Learn at Your Own Pace</h3>
            <p className='text-gray-600 text-sm'>
              No deadlines, no pressure. Learn whenever and wherever you want. 
              Your progress is always saved so you can pick up right where you left off.
            </p>
          </div>

          <div className='bg-red-50 border border-red-100 rounded-xl p-6 text-center'>
            <div className='text-4xl mb-4'>🌍</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>World Class Instructors</h3>
            <p className='text-gray-600 text-sm'>
              Learn from the best in the industry. Our instructors bring years of real-world 
              experience and make complex topics simple and engaging.
            </p>
          </div>

          <div className='bg-teal-50 border border-teal-100 rounded-xl p-6 text-center'>
            <div className='text-4xl mb-4'>💰</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>Affordable Pricing</h3>
            <p className='text-gray-600 text-sm'>
              Get access to premium courses at a fraction of the cost of traditional education. 
              Invest in yourself without breaking the bank.
            </p>
          </div>

        </div>

        {/* What Happens After Completion */}
        <div className='bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white text-center mb-16'>
          <h2 className='text-3xl font-bold mb-6'>What Happens After You Complete a Course?</h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-8'>
            <div className='flex flex-col items-center gap-3'>
              <div className='bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold'>1</div>
              <p className='font-semibold'>Complete All Lectures</p>
              <p className='text-blue-100 text-sm'>Watch and mark all video lectures as complete</p>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <div className='bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold'>2</div>
              <p className='font-semibold'>Get Your Certificate</p>
              <p className='text-blue-100 text-sm'>Download your personalized completion certificate</p>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <div className='bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold'>3</div>
              <p className='font-semibold'>Share Your Achievement</p>
              <p className='text-blue-100 text-sm'>Add certificate to LinkedIn, resume or portfolio</p>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <div className='bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold'>4</div>
              <p className='font-semibold'>Land Your Dream Job</p>
              <p className='text-blue-100 text-sm'>Use your new skills to advance your career</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>What Our Learners Say</h2>
          <p className='text-gray-500 mb-10'>Real stories from real people who transformed their careers with Edemy</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

            <div className='bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold'>R</div>
                <div>
                  <p className='font-semibold text-gray-800'>Rahul Sharma</p>
                  <p className='text-sm text-gray-500'>Software Developer</p>
                </div>
              </div>
              <p className='text-gray-600 text-sm'>
                "Edemy helped me transition from a non-tech background to a full stack developer role in just 6 months. The courses are practical and the certificate helped me land my first job!"
              </p>
              <div className='flex mt-3'>{'⭐'.repeat(5)}</div>
            </div>

            <div className='bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold'>P</div>
                <div>
                  <p className='font-semibold text-gray-800'>Priya Patel</p>
                  <p className='text-sm text-gray-500'>Digital Marketer</p>
                </div>
              </div>
              <p className='text-gray-600 text-sm'>
                "The Social Media Marketing course on Edemy was exactly what I needed. I applied the skills immediately and doubled my client base within 3 months!"
              </p>
              <div className='flex mt-3'>{'⭐'.repeat(5)}</div>
            </div>

            <div className='bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold'>A</div>
                <div>
                  <p className='font-semibold text-gray-800'>Amit Verma</p>
                  <p className='text-sm text-gray-500'>Forex Trader</p>
                </div>
              </div>
              <p className='text-gray-600 text-sm'>
                "The trading course completely changed how I approach the markets. The strategies are practical and I have been consistently profitable since completing the course."
              </p>
              <div className='flex mt-3'>{'⭐'.repeat(5)}</div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className='text-center py-10'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Ready to Transform Your Career?</h2>
          <p className='text-gray-500 mb-8'>Join thousands of learners who are already advancing their careers with Edemy</p>
          <button
            onClick={() => { navigate('/course-list'); scrollTo(0, 0) }}
            className='px-12 py-4 bg-blue-600 text-white font-semibold rounded-md text-lg hover:bg-blue-700'
          >
            Start Learning Today 🚀
          </button>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default LearnMore