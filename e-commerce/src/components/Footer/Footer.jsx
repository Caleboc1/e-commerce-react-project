import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

const FooterLinks = [
{
  title: "Home",
  link: "/#"
},
{
  title: "About",
  link: "/#about"
},
{
  title: "Contact",
  link: "/#contact"
},
{
  title: "Blog",
  link: "/#blog"
}
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details  */}
          <div className='py-8 px-4'>
          <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
          <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem quo, placeat 
          </p>
          <p className='text-gray-500 mt-4'>Made with passion by Caleb </p>
          <a href="#" target='_blank' className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>Visit my youtube channel</a>
          </div>
          {/* footer links */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
              <ul className='space-y-3'>
                {
                 FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className='text-gray-400 dark:text-gray-40 hover:text-black dark:hover:text-white duration-300'>
                   {data.title}
                   </a>
                  </li>
                 ))
                }
              </ul>
            </div>
          {/* second col links */}
          <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
              <ul className='space-y-3'>
                {
                 FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className='text-gray-400 dark:text-gray-40 hover:text-black dark:hover:text-white duration-300'>
                   {data.title}
                   </a>
                  </li>
                 ))
                }
              </ul>
            </div>
            {/* company address  */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
            <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
             <div>
              <div className='flex items-center gap-3'>
               <FaLocationArrow />
               <p>Chevron, Lagos</p>
              </div>
              <div className='flex items-center gap-3 mt-6'>
               <FaMobileAlt />
               <p>+2347081078630</p>
              </div>
              {/* social links  */}
              <div className='flex items-center gap-3 mt-6'>
              <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-200"/>
                </a>
                <a href="#">
                <FaFacebookF className="text-3xl hover:text-primary duration-200"/>
                </a>
                <a href="#">
                  <FaLinkedinIn className="text-3xl hover:text-primary duration-200"/>
                </a>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
