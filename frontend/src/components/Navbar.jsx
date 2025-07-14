import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const {navigate, token} = useAppContext();

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <Link to="/"><img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-32 sm:w-44 cursor-pointer' /></Link>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/about" className="hover:text-telegram transition">About</Link>
        </li>
        <li>
          <Link to="/donate" className="hover:text-telegram transition">Donate</Link>
        </li>
        <li>
          <Link to="/photos-videos" className="hover:text-telegram transition">Photos & Videos</Link>
        </li>
        <li>
          <Link to="/blog" className="hover:text-telegram transition">Blog</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-telegram transition">Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar