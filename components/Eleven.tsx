"use client"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { cardsData } from '@/data/cardData'
import { useState } from 'react'
import Image from 'next/image'

const Eleven = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  function handleLeft(){
    setCurrentIndex((prev) => prev > 0 ? prev - 1 : cardsData.cards.length - 1);
  }
  
  function handleRight(){
    setCurrentIndex((prev) => prev < cardsData.cards.length - 1 ? prev + 1 : 0);
  }
  
  return (
    <div
      className='min-h-screen w-full bg-[#155ADA] mt-10 py-20 pl-20 space-y-20 font-inter
      max-xl:pl-14
      max-lg:pl-10 
      max-md:pl-6 max-md:py-14
      max-sm:pl-4 max-sm:py-10'
    > 

      {/* TOP TEXT + BUTTON */}
      <div className='w-full flex relative max-md:flex-col max-md:gap-6 max-md:items-start'>
        
        {/* LEFT CONTENT */}
        <div
          className='w-[814px] h-full text-white space-y-6
          max-xl:w-[700px]
          max-lg:w-[600px]
          max-md:w-full'
        >
          <span className='tracking-tight font-semibold text-[24px]
            max-lg:text-[20px] max-md:text-[18px]'>
            Join other Sun harvesters
          </span>

          <h3 className='text-[42px] tracking-tight uppercase font-bold font-roboto
            max-lg:text-[36px]
            max-md:text-[30px]
            max-sm:text-[26px]'>
            Lorem ipsum dolor sit amet
          </h3>

          <p className='text-[18px] leading-[25px] max-md:text-[16px]'>
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor. 
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
          </p>
        </div>

        {/* RIGHT BUTTON */}
        <Button
          className='absolute right-40 top-10 w-[238px] h-[38px] bg-white text-black font-bold cursor-pointer hover:bg-neutral-100
            max-xl:right-20
            max-lg:right-10
            max-md:static max-md:mt-4 max-md:w-[200px]
            max-sm:w-full'
        >
          Lorem Ipsum
        </Button>
      </div>

      {/* CARDS WRAPPER */}
      <div
        className='w-full flex px-3 py-7 gap-6 overflow-x-hidden scroll-smooth
        max-sm:px-1'
      >
        <div 
          className='flex gap-6 transition-transform duration-500 ease-in-out
            max-md:gap-4'
          style={{ transform: `translateX(-${currentIndex * (364 + 24)}px)` }}
        >
          {cardsData.cards.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className={`${currentIndex === idx ? 'scale-110' : 'scale-100'}
                transition-transform duration-300 ease-in-out mx-3 my-2
                w-[364px] h-[443px] shrink-0 bg-white rounded-[10px] border border-[#E2E8F0] p-6 flex flex-col justify-between shadow-[0px_4px_20px_rgba(0,0,0,0.1)]
                max-lg:w-[300px] max-lg:h-[400px]
                max-md:w-[260px] max-md:h-[360px]
                max-sm:w-[220px] max-sm:h-[340px]`}
            >
              <div className='space-y-4'>
                <div className='w-12 h-12 flex items-center justify-center text-[#155ADA]'>
                  {/* ICON */}
                </div>
                <p className='text-[#1E293B] text-[16px] leading-[24px] max-sm:text-[14px]'>
                  {card.text}
                </p>
              </div>

              <div className='flex items-center gap-3 mt-6 pt-6 border-t border-[#E2E8F0]'>
                <Image
                  src={card.avatar}
                  alt={card.user}
                  width={48}
                  height={48}
                  className='w-12 h-12 rounded-full object-cover'
                />
                <span className='text-[#1E293B] font-medium text-[16px]
                  max-sm:text-[14px]'>
                  {card.user}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ARROWS */}
      <div className='w-30 h-12 flex justify-between items-center gap-4
        max-md:justify-center'>
        
        <Button
          onClick={handleLeft}
          className='h-12 w-12 rounded-full bg-transparent border-white hover:bg-blue-700 hover:scale-105 scale-100 cursor-pointer border
            max-sm:h-10 max-sm:w-10'
        >
          <ArrowLeft/>
        </Button>

        <Button
          onClick={handleRight}
          className='h-12 w-12 rounded-full bg-transparent border-white hover:bg-blue-700 hover:scale-105 scale-100 cursor-pointer border
            max-sm:h-10 max-sm:w-10'
        >
          <ArrowRight/>
        </Button>
      </div>

    </div>
  )
}

export default Eleven
