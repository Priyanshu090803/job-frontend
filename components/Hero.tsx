 
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=' min-h-screen w-full bg-white  relative overflow-hidden   '>

   <div className='   w-[696px] h-[515px] absolute top-[200px] left-[66px] font-roboto space-y-10 
   max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:w-full max-lg:h-auto max-lg:px-6 max-lg:py-12
   max-sm:px-4 max-sm:py-8 max-sm:space-y-6'>
       <div className=' space-y-5 max-sm:space-y-3'>
       <h1 className=' font-bold text-[64px] px-2 w-[528px] font-roboto leading-[70px]
       max-lg:text-5xl max-lg:w-full max-lg:leading-tight
       max-sm:text-3xl max-sm:px-0'>Lorem ipsum dolor sit amet</h1> 
       <p className=' w-[646px]
       max-lg:w-full max-lg:text-base
       max-sm:text-sm'>Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse. </p>
       </div>
      
    <div className='   '>
        <div className=' flex gap-2 
        max-sm:flex-col max-sm:gap-3'>
            <input type="text" className=' h-[46px] w-[324px] border-2 border-neutral-200 rounded-lg px-3 focus:outline-1 focus:outline-neutral-400
            max-lg:w-64 max-sm:w-full' />
            <button className=' bg-[#1959AC] w-[127px] rounded-lg text-white text-[15px] font-inter flex items-center  justify-center cursor-pointer
            max-sm:w-full max-sm:h-[46px]'>Submit <ArrowRight/></button>
        </div>
    </div>
    </div>

    <div className=' h-[932px] w-[932px] absolute -top-[19px]  left-[602px]   flex justify-end 
    max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:w-full max-lg:h-[400px] max-lg:mt-0
    max-sm:h-[300px]'>
    <div 
    className="  inset-0 max-lg:w-full max-lg:h-full"
    style={{
        clipPath: 'polygon(34% 0, 100% 0, 100% 100%, 1% 100%)',
    }}
    >
    <Image
    className='  object-cover h-[831px] w-[699px]
    max-lg:w-full max-lg:h-full'
    src={'/heroImg.png'}
    height={831}
    width={699}
    alt='heroImg'
    />
    
    </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20  bg-gradient-to-t from-white to-transparent" />

    </div>
  )
}

export default Hero