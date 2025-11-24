'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
  import  {motion} from 'motion/react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonHover = {
    scale: 1.02,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 10 
    }
  };

  const buttonTap = {
    scale: 0.98,
  };

  return (
    <div className='min-h-screen w-full bg-white relative overflow-hidden'>
      <motion.div 
        className='w-[696px] h-[515px] absolute top-[200px] left-[66px] font-roboto space-y-10 
          max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:w-full max-lg:h-auto max-lg:px-6 max-lg:py-12
          max-sm:px-4 max-sm:py-8 max-sm:space-y-6'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className='space-y-5 max-sm:space-y-3'
          variants={itemVariants}
        >
          <motion.h1 
            className='font-bold text-[64px] px-2 w-[528px] font-roboto leading-[70px]
            max-lg:text-5xl max-lg:w-full max-lg:leading-tight
            max-sm:text-3xl max-sm:px-0'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet
          </motion.h1> 
          <motion.p 
            className='w-[646px] max-lg:w-full max-lg:text-base max-sm:text-sm'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className='flex gap-2 max-sm:flex-col max-sm:gap-3'
          variants={itemVariants}
        >
          <motion.input 
            type="text" 
            className='h-[46px] w-[324px] border-2 border-neutral-200 rounded-lg px-3 focus:outline-1 focus:outline-neutral-400
            max-lg:w-64 max-sm:w-full'
            whileFocus={{ 
              scale: 1.01,
              boxShadow: '0 0 0 2px rgba(25, 89, 172, 0.2)'
            }}
          />
          <motion.button 
            className='bg-[#1959AC] w-[127px] rounded-lg text-white text-[15px] font-inter flex items-center justify-center cursor-pointer
            max-sm:w-full max-sm:h-[46px]'
           //@ts-ignore
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            Submit <ArrowRight className="ml-1" />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div 
        className='h-[932px] w-[932px] absolute -top-[19px] left-[602px] flex justify-end 
        max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:w-full max-lg:h-[400px] max-lg:mt-0
        max-sm:h-[300px]'
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div 
          className="inset-0 max-lg:w-full max-lg:h-full"
          style={{
            clipPath: 'polygon(34% 0, 100% 0, 100% 100%, 1% 100%)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              className='object-cover h-[831px] w-[699px] max-lg:w-full max-lg:h-full'
              src={'/heroImg.png'}
              height={831}
              width={699}
              alt='heroImg'
              priority
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;