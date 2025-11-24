"use client"

import { ArrowRight, Phone } from 'lucide-react'
import Image from 'next/image'
import LinearSpan from './utils/LinearSpan'
import { motion, Variants } from 'motion/react'

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const slideIn: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const Second = () => {
  return (
    <motion.div 
      className='h-full w-full relative flex justify-end max-lg:justify-center max-lg:px-4 max-sm:px-3'
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <motion.div 
        className='z-10 w-[1360px] relative h-[989px] flex gap-4 border-t border-l border-[#D4D4D4] pr-10 pl-6 mt-30 shadow-lg shadow-neutral-300 max-xl:w-full max-xl:h-auto max-xl:flex-col max-xl:pr-4 max-xl:pb-10 max-lg:mt-20 max-sm:pl-4 max-sm:pr-3 max-sm:mt-16'
        variants={item}
      >
        <div className='absolute bg-linear-to-r from-[#043898] via-[#079902] to-[#170041] left-0 -bottom-1 w-[97%] h-4' />

        <motion.div 
          className='h-full w-full flex flex-col gap-4 mt-6'
          variants={container}
        >
          <motion.div 
            className='font-inter' 
            variants={item}
          >
            <motion.h4 
              className='text-[24px] text-[#0546D2] font-semibold max-sm:text-xl'
              variants={item}
            >
              Lorem ipsum dolor sit
            </motion.h4>
            <motion.h2  
              className='text-[42px] uppercase font-bold w-[325px] font-roboto max-lg:text-3xl max-lg:w-full max-sm:text-2xl'
              variants={item}
            >
              Lorem ipsum dolor sit amet
            </motion.h2>
            <motion.p 
              className='font-inter leading-[25px] w-[593px] max-lg:w-full max-sm:text-sm max-sm:leading-relaxed'
              variants={item}
            >
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className='w-[594px] h-[471px] space-y-6 max-lg:w-full max-lg:h-auto max-sm:space-y-4'
            variants={item}
          >
            {[
              { 
                src: '/secondpageImg1.png', 
                alt: 'img1',
                text: 'Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.',
                className: '-ml-[7px] max-sm:w-[100px] max-sm:h-[100px] max-sm:ml-0'
              },
              { 
                src: '/secondpageImg2.png', 
                alt: 'img2',
                text: 'Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.',
                className: '-ml-[6px] max-sm:w-[100px] max-sm:h-[100px] max-sm:ml-0'
              },
              { 
                src: '/secondpageImg3.png', 
                alt: 'img3',
                text: 'Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.',
                className: '-mt-[6px] -ml-[7px] max-sm:w-[100px] max-sm:h-[100px] max-sm:mt-0 max-sm:ml-0'
              }
            ].map((img, index) => (
              <motion.div 
                key={index}
                className='flex items-center gap-4 max-sm:gap-3'
                variants={slideIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  height={index === 2 ? 151 : index === 1 ? 141 : 146}
                  width={index === 2 ? 144 : 146}
                  className={img.className}
                />
                <p className="w-[376px] max-lg:w-full max-lg:flex-1 max-sm:text-sm">
                  {img.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className='absolute bottom-[103px] w-[315px] h-[38px] flex gap-3 max-xl:relative max-xl:bottom-auto max-xl:mt-6 max-xl:mb-4 max-sm:flex-col max-sm:w-full max-sm:h-auto max-sm:gap-4'
          variants={item}
        >
          <motion.button 
            className='bg-[#1959AC] text-[15px] h-full rounded-lg shadow-lg cursor-pointer shadow-neutral-200 font-inter text-white flex justify-center items-center gap-2 w-[179px] max-sm:w-full max-sm:h-[46px]'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Loerum Ipsum<ArrowRight/>
          </motion.button>
          <motion.span 
            className='flex items-center justify-center gap-2 text-[15px] text-[#043898]'
            variants={item}
          >
            <Phone className='h-[18px]'/>123456789
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ 
            opacity: 1, 
            x: 0,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <Image
            className='h-[803px] w-[629px] object-cover object-right mt-10 max-xl:w-full max-xl:h-[400px] max-xl:mt-6 max-sm:h-[280px]'
            src={"/secondBike.png"}
            height={803}
            width={629}
            alt='secondbike'
            priority
          />
        </motion.div>
      </motion.div>
      <LinearSpan/>
    </motion.div>
  )
}

export default Second