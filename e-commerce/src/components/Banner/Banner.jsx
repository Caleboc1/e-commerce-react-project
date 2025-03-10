import React from 'react'
// import headphone from '../../images/headphone.png';


// const data = {
//     discount: "30% OFF",
//     title: "Fine Smile",
//     date: "10 Jan to 28 Jan",
//     image: headphone,
//     title2: "Air Solo Bass",
//     title3: "Winter Sale",
//     title4: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. I corporis ipsam rem dolorum aut possimus doloremque dolore",
//     bgColor: "#f42c37",  
  
//   };
function Banner({data}) {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
      <div className='container'>
        <div style={{backgroundColor: data.bgColor}}  className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
            {/* first col  */}
             <div className='p-6 sm:p-8'>
                <p 
                data-aos="slide-right"
                className='text-sm'>{data.discount}</p>
                <h1
                data-aos="zoom-out"
                 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
                <p 
                data-aos="fade-up"
                className='text-sm'>{data.date}</p>
             </div>
            {/* second col  */}
            <div data-aos="zoom-in"
            className='h-full flex  items-center justify-center'>
                <img src={data.image} alt='' className='scale-125 w-[250px] 
                md:w-[340px] mx-auro drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] object-cover ' />
            </div>
            {/* third col  */}
            <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                <p data-aos="zoom-out"
                className='font-bold text-xl'>{data.title2}</p>
                <p data-aos="fade-up"
                 className='text-3xl sm:text-5xl font-bold  '>{data.title3}</p>
                <p data-aos="fade-up"
                className='text-sm tracking-wide leading-5'>{data.title4}</p>
                <div data-aos="fade-up" data-aos-offset="0">
                <button style={{color: data.bgColor }} className='bg-white py-2 px-4 rounded-full'>Shop Now</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
