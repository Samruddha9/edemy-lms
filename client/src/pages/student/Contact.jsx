import React, { useState } from 'react'
import Footer from '../../components/student/Footer'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! We will get back to you shortly.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className='min-h-screen'>
      <div className='md:px-36 px-8 py-20'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>Contact Us</h1>
        <p className='text-gray-600 text-lg mb-10'>
          Have a question or feedback? We'd love to hear from you.
        </p>
        <form onSubmit={handleSubmit} className='max-w-lg flex flex-col gap-4'>
          <div>
            <label className='text-gray-700 font-medium'>Name</label>
            <input type='text' value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder='Your name' required className='w-full border border-gray-300 rounded px-4 py-2 mt-1 outline-none focus:border-blue-500' />
          </div>
          <div>
            <label className='text-gray-700 font-medium'>Email</label>
            <input type='email' value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder='Your email' required className='w-full border border-gray-300 rounded px-4 py-2 mt-1 outline-none focus:border-blue-500' />
          </div>
          <div>
            <label className='text-gray-700 font-medium'>Message</label>
            <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder='Your message' required rows={5} className='w-full border border-gray-300 rounded px-4 py-2 mt-1 outline-none focus:border-blue-500' />
          </div>
          <button type='submit' className='bg-blue-600 text-white px-8 py-2 rounded w-max'>Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact