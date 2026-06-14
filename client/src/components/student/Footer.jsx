import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (!email) {
      toast.error('Please enter your email address')
      return
    }
    if (!email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }
    toast.success('Subscribed to our newsletter! You will get updates when we add new content.')
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">

        <div className="flex flex-col md:items-start items-center w-full">
          <img src={assets.logo_dark} alt="logo" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><Link to="/" onClick={() => scrollTo(0,0)}>Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/privacy">Privacy policy</Link></li>
          </ul>
        </div>

        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">Subscribe to our newsletter</h2>
          <p className="text-sm text-white/80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
            />
            <button
              onClick={handleSubscribe}
              className="bg-blue-600 w-24 h-9 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2026 © Samruddha S. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;