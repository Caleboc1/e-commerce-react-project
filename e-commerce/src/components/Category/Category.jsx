import React from 'react'
import image1 from "../../images/earphone.png"
import image2 from "../../images/watch.png"
import image3 from "../../images/macbook.png"
import Button from '../shared/Button';

function Category() {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:gri-cols-2 lg:grid-cols-4 gap-8">
            {/* first col  */}
            <div className='py-10 pl-5 bg-gradient-to-br from-black/90
             to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                        <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"}/>
                    </div>
                </div>
                <img src={image1} alt="" 
                className='w-[180px] absolute bottom-0'
                />
            </div>
            {/* second col  */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow
             to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Gadget</p>
                        <Button text="Browse" bgColor={"bg-white"} 
                        textColor={"text-brandYellow"}/>
                    </div>
                </div>
                <img src={image2} alt="" 
                className='w-[160px] absolute -right-2 lg:top-[25px] '
                />
            </div>
            {/* third col  */}
            <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary
             to-primary/90 text-white rounded-3xl 
             relative h-[320px] flex items-end'>
                <div>
                    <div className=' mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Laptop</p>
                        <Button text="Browse" bgColor={"bg-white"} 
                        textColor={"text-primary"}/>
                    </div>
                </div>
                <img src={image3} alt="" 
                className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0'
                />
            </div>      
        </div>
      </div>
    </div>
  )
}

export default Category
