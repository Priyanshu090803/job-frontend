 

"use client"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const carouselData = [
  {
    id: 1,
    image: '/fourteen.png',
    title: 'Artist & Investor',
    description: 'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...'
  },
  {
    id: 2,
    image: '/fourteen.png',
    title: 'Creative Director',
    description: 'Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus...'
  },
  {
    id: 3,
    image: '/fourteen.png',
    title: 'Business Owner',
    description: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra...'
  }
]

const Fourteen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselData.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = carouselData[currentIndex];

  return (
    <div className='min-h-screen w-full  flex flex-col items-center p-20 space-y-20 font-inter relative
      max-lg:p-10 max-md:p-6 max-sm:p-4'>

       <div className='w-[1280px] text-center space-y-[32px]
        max-xl:w-[90%] max-lg:w-full'>

        <h3 className='font-roboto font-bold text-[42px] uppercase tracking-tight
          max-md:text-[32px] max-sm:text-[26px]'>

          Lorem ipsum dolor sit amet
        </h3>

        <p className='leading-[25px] max-md:text-[15px] max-sm:text-[14px]'>
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst...
        </p>
      </div>

      <div className='h-[412px] w-[1280px] relative flex items-center overflow-hidden
        max-xl:w-[90%] max-lg:w-full max-md:h-auto max-md:flex-col max-md:gap-6'>

        <div className={`transition-all duration-300 
            ${isAnimating ? 'opacity-0 translate-x-[-100px]' : 'opacity-100 translate-x-0'}
            max-md:w-full`}>

          <Image
            src={currentItem.image}
            alt='fourteen-img'
            width={680}
            height={412}
            className='h-[412px] w-[680px] object-cover 
              max-lg:w-[55%] max-md:w-full max-md:h-[300px]'
          />
        </div>

        <div className={`bg-white absolute h-[264px] w-[680px] shadow-lg right-0 px-12 pt-12 pb-6 
              transition-all duration-300
              ${isAnimating ? 'opacity-0 translate-x-[100px]' : 'opacity-100 translate-x-0'}
              max-lg:w-[55%]
              max-md:static max-md:w-full max-md:h-auto max-md:px-6 max-md:py-6`}>

          <h4 className='text-[#475569] font-semibold tracking-wide text-[24px]
            max-sm:text-[20px]'>

            {currentItem.title}
          </h4>

          <p className='text-[18px] text-[#0F172A] leading-[25px]
            max-sm:text-[15px]'>

            {currentItem.description}
          </p>

          <button className='mt-6 flex items-center gap-2 text-[#1959AC] text-[16px]
            max-sm:text-[14px]'>

            Read Full Story <ArrowRight className='h-5 w-5 max-sm:h-4 max-sm:w-4'/>
          </button>
        </div>
      </div>

      <div className='h-3 w-32 absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3
        max-md:bottom-6 max-sm:bottom-4'>

        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 cursor-pointer 
              ${currentIndex === index ? 'bg-[#1959AC] w-8' : 'bg-gray-300'}
              max-sm:h-2 max-sm:w-2`}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsAnimating(false);
              }, 300);
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Fourteen
