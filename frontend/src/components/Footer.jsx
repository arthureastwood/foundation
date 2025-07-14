import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(()=> {
      setYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Donate', href: '/donate' },
    { name: 'Photos & Videos', href: '/photos-videos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const helpLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/', icon: assets.twitter_icon },
    { name: 'Facebook', href: 'https://facebook.com/', icon: assets.facebook_icon },
    { name: 'Instagram', href: 'https://instagram.com/', icon: assets.instagram_icon },
    { name: 'LinkedIn', href: 'https://linkedin.com/', icon: assets.linkedin_icon },
  ];

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-telegram/3'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
        <div>
          <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
          <p className='max-w-[410px] mt-6'>Kamkam Children's Foundation is an organization that empowers children and communities.</p>
          <div className="flex gap-4 mt-6">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <img src={social.icon} alt={social.name} className="w-6 h-6 hover:scale-110 transition" />
              </a>
            ))}
          </div>
        </div>

        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-10'>
          <div>
            <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>Quick Links</h3>
            <ul className='text-sm space-y-1'>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className='hover:underline transition'>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>Help</h3>
            <ul className='text-sm space-y-1'>
              {helpLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className='hover:underline transition'>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>{`© ${year} Kamkam Children's Foundation. All Rights Reserved.`}</p>
    </div>
  )
}

export default Footer