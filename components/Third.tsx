 
"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

const Third = () => {
  return (
    <div className='min-h-screen pl-20 w-full mt-34 flex justify-between font-inter relative
    max-lg:flex-col max-lg:pl-6 max-lg:mt-20
    max-sm:pl-4 max-sm:mt-16'>
       <div className='absolute bg-linear-to-r from-[#043898] via-[#079902] to-[#170041] right-0 -bottom-1 w-[90%] h-4'/>
        {/* 5 Background Diagonal Lines */}

      <span className="absolute -bottom-16 left-[60px] h-[45px] w-[1px] bg-gradient-to-b from-[#155ADA] to-[#0B743B] opacity-25 rotate-[32deg]
      max-lg:hidden" />
      
      <span className="absolute -bottom-22 left-[70px] h-[70px] w-[1px] bg-gradient-to-b from-[#155ADA] to-[#0B743B] opacity-25 rotate-[32deg]
      max-lg:hidden" />

      <span className="absolute -bottom-26 left-[82px] h-[90px] w-[1px] bg-gradient-to-b from-[#155ADA] to-[#0B743B] opacity-25 rotate-[32deg]
      max-lg:hidden" />

      <span className="absolute -bottom-33 left-[90px] h-[120px] w-[1px] bg-gradient-to-b from-[#155ADA] to-[#0B743B] opacity-25 rotate-[32deg]
      max-lg:hidden" />

      <span className="absolute -bottom-40 left-[100px] h-[150px] w-[1px] bg-gradient-to-b from-[#155ADA] to-[#0B743B] opacity-25 rotate-[32deg]
      max-lg:hidden" />

      <div className='w-[762px] mt-15 py-10 pl-5
      max-lg:w-full max-lg:pr-6 max-lg:mt-8
      max-sm:pl-2 max-sm:pr-4 max-sm:py-6'>
          <div>
              <h4 className='text-[#0546D2] font-semibold text-[24px]
              max-sm:text-xl'>Lorem ipsum dolor sit amet </h4>
              <h2 className='font-roboto text-[#222222] text-[42px] w-[435px] font-bold uppercase
              max-lg:w-full max-lg:text-3xl
              max-sm:text-2xl'>Lorem ipsum dolor sit amet consectetur. Eu elit.</h2>
              <p className='w-[678px]
              max-lg:w-full
              max-sm:text-sm'>Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare. </p>
          </div>
          <div className='py-10 pl-5 pr-10 space-y-10
          max-lg:pr-0 max-lg:pl-0
          max-sm:py-6 max-sm:space-y-6'>
              {[1, 2, 3].map((_, index) => (
                <div key={index} className='flex gap-4 w-[702px]
                max-lg:w-full
                max-sm:gap-3'>
                  <Image
                    src={'/thirdsmall1.png'}
                    alt='small'
                    height={36} 
                    width={38}
                    className='h-[36px] w-[38px] object-cover
                    max-sm:h-[28px] max-sm:w-[30px] max-sm:mt-1'
                  />
                  <div className='space-y-2.5 w-[650px] tracking-tight
                  max-lg:w-full max-lg:flex-1
                  max-sm:space-y-1.5'>
                      <h4 className='font-semibold text-[20px] font-inter 
                      max-sm:text-base'>Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</h4>
                      <p className='text-[18px] leading-[25px] 
                      max-sm:text-sm max-sm:leading-relaxed'>Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.</p>
                  </div>
                </div>
              ))}
          </div>
      </div>

      <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }}
  viewport={{ once: true }}
  className='relative h-[620px] w-[577px] mt-36.5
  max-lg:w-full max-lg:h-[400px] max-lg:mt-8
  max-sm:h-[280px]'
>
  <Image
    src={"/thirdpage.png"}
    fill
    alt='thirdpage'
    className='object-cover object-left'
    sizes="(max-width: 1024px) 100vw, 577px"
  />
</motion.div>
    </div> 
  )
}

export default Third