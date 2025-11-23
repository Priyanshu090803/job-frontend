 

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Ten = () => {
  return (
    <div className=' min-h-screen w-full border py-30 font-inter
    max-lg:py-20
    max-sm:py-12 space-y-30 relative'> 
     <div className="absolute inset-0 pointer-events-none h-full w-full">
            <Image
              src="/pagetengraphic.svg"
              alt="Background Graphic"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
      <div className=' h-[765px] bg-[#F1F5F9] relative py-15 px-25
      max-lg:h-auto max-lg:min-h-[600px] max-lg:py-12 max-lg:px-6
      max-sm:min-h-[500px] max-sm:py-8 max-sm:px-4'>
        <Image
        src={'/pagetenImg.png'}
        alt='page-ten'
        height={853}
        width={1278}
        className=' absolute bottom-0 right-20 w-[1324px] object-cover
        max-xl:w-[900px] max-xl:right-10
        max-lg:relative max-lg:w-full max-lg:h-[350px] max-lg:right-0 max-lg:mt-8 max-lg:object-contain
        max-sm:h-[250px] max-sm:mt-6'
        />
        <div className=' w-[460px] h-[315px] 
        max-lg:w-full max-lg:h-auto max-lg:z-10 max-lg:relative
        max-sm:w-full'>
            <span className=' text-[#475569] text-[20px] font-semibold
            max-sm:text-lg'>NO LIMITS</span>
            <h3 className=' font-roboto text-[#0F172A] font-bold text-[42px] tracking-tight uppercase
            max-lg:text-3xl
            max-sm:text-2xl'>Lorem ipsum dolor sit amet</h3>
            <p className=' leading-[25px] text-[18px]
            max-lg:w-full
            max-sm:text-base max-sm:leading-relaxed'>Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.</p>
             <Button className='  bg-[#1959AC] text-[15px]   rounded-md shadow-lg cursor-pointer shadow-neutral-200  font-inter text-white flex justify-center items-center gap-2 w-[179px] h-[38px]
        max-sm:w-full max-sm:h-[46px] mt-10
        max-sm:mt-6'>Loerum Ipsum<ArrowRight className='max-sm:w-4 max-sm:h-4'/></Button>
        </div>
      </div>
     
      <div className=' h-screen py-20'>
         <div className=' w-[95%] h-[691px]  bg-[#F8F8F8] relative px-20  flex justify-end py-15'>
        <div className=' absolute bg-linear-to-r from-[#043898] via-[#079902] to-[#170041] left-0 -bottom-1 w-[97%]  h-4'/>

            <Image
            src={'/tensecondpage.png'}
            alt='page-ten-2'
            height={550}
            width={550}
            className=' object-cover absolute -top-[62px] left-0'
            />
            <div className=' w-[620px]  space-y-5'>
            <span className=' text-[#0546D2] tracking-tight text-[24px] font-semibold'>Lorem ipsum </span>
            <h3 className=' uppercase text-[42px] tracking-tight font-bold font-roboto w-[487px]'><span>Lorem</span> ipsum dolor sit amet consectetur. Enim donec.</h3>
            <p className=' leading-[25px] text-[18px]'>Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non. </p>
  <div className="grid grid-cols-2 gap-4 max-sm:gap-3 w-[539px] ">
    {new Array(6).fill(0).map((_, index) => (
      <div
        key={index}
        className="w-[223px] h-[48px]   flex items-center justify-start    text-sm font-medium"
      >
        Lorem Ipsum
      </div>
    ))}
  </div>

            </div>
        </div>
      </div>
       
    </div>
  )
}

export default Ten