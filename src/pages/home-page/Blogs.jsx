import React from 'react'

import blogImg1 from "../../assets/blogs/blog-1.png";
import blogImg2 from "../../assets/blogs/blog-2.png";
import blogImg3 from "../../assets/blogs/blog-3.png";
import arrowIcon from "../../assets/arrow.png"

const Blogs = () => {
  return (
    <section className='bg-white mb-10 py-28' id='blog'>
        <div className='max-w-screen-2xl container mx-auto px-5'>
            {/* header */}
            <div className='text-center mb-12'>
                <h2 className='text-3xl lg:text-4xl font-bold text-gray-800'>Our newest updates and <span className='text-orange-500'>insights</span></h2>
                <p className='mt-4 text-gray-600 max-w-2xl mx-auto' >Stay up-to-date with our latest news and blog posts, offering valuable insights and updates on industry trends and expert tips.</p>
            </div>

            {/* blog cards section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* Card 1 */}
                <div className='border rounded-lg relative overflow-hidden shadow-lg hover:scale-105 transition-all duration-200 ease-in cursor-pointer'>
                    <img src={blogImg1} alt="blog img 1" className='w-full h-48 md:h-56 object-cover'  />
                    <div className='p-4'>
                        <p className='text-sm text-[#2D2D2D] mb-2'>Dec 20, 2024</p>
                        <h3 className='text-[#ff5B28] text-[23px] font-semibold mb-3'>Essential tips for first-time home buyers: your complete guide</h3>
                    </div>
                </div>

                {/* card 2 */}
                <div className='lg:mt-14 lg:-mb-14 border rounded-lg relative overflow-hidden shadow-lg hover:scale-105 transition-all duration-200 ease-in cursor-pointer'>
                    <img src={blogImg2} alt="blog img 1" className='w-full h-48 md:h-56 object-cover'  />
                    <div className='p-4'>
                        <p className='text-sm text-[#2D2D2D] mb-2'>Dec 20, 2024</p>
                        <h3 className='text-gray-800 text-[23px] font-semibold mb-3'>Essential tips for first-time home buyers: your complete guide</h3>
                    </div>
                </div>

                {/* card 3 */}
                <div className='border rounded-lg relative overflow-hidden shadow-lg hover:scale-105 transition-all duration-200 ease-in cursor-pointer'>
                    <img src={blogImg3} alt="blog img 1" className='w-full h-48 md:h-56 object-cover'  />
                    <div className='p-4'>
                        <p className='text-sm text-[#2D2D2D] mb-2'>Dec 20, 2024</p>
                        <h3 className='text-gray-800 text-[23px] font-semibold mb-3'>Essential tips for first-time home buyers: your complete guide</h3>
                    </div>
                </div>
            </div>

            {/* button section */}
            <div className='text-center mt-9 lg:mt-24'>
                    <button className='px-6 py-3 border mx-auto text-[#0F0E0E] border-orange-600 flex items-center gap-2 text-sm font-medium rounded-md transition-transform transform hover:scale-105'>
                        View all Insights <span> <img src={arrowIcon} alt="arrow icon" /></span>
                    </button>
                </div>
        </div>
    </section>
  )
}

export default Blogs