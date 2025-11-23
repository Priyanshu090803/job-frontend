
import Image from 'next/image'

const Nine = () => {
  return (
    <div className=' font-inter   h-[530px] w-full bg-[#F3F3F3] pl-[80px] pt-[100px]  relative
    max-lg:h-auto max-lg:pl-6 max-lg:pt-12 max-lg:pb-12
    max-sm:pl-4 max-sm:pt-8 max-sm:pb-8'> 
    <div className='   w-[526px] space-y-5
    max-lg:w-full max-lg:pr-6 max-lg:z-10 max-lg:relative
    max-sm:pr-4 max-sm:space-y-4'>
        <h4 className=' text-[#0546D2] font-semibold tracking-tight text-[24px]
        max-sm:text-xl'>Lorem Ipsum</h4>
        <h2 className=' w-[418px] font-extrabold text-[42px] tracking-tight capitalize  
        max-lg:w-full max-lg:text-3xl
        max-sm:text-2xl'>Lorem ipsum dolor sit amet</h2>
        <p className=' leading-[25px] text-[18px] tracking-tight w-[526px]
        max-lg:w-full
        max-sm:text-base max-sm:leading-relaxed'>Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.</p>
        <div className=' flex gap-6 py-4 
        max-sm:flex-col max-sm:gap-3 max-sm:py-3'>
            <Image
        src={'/playstore.png'}
        height={41}
        width={140}
        alt='playstore'
        className=' cursor-pointer
        max-sm:w-[120px] max-sm:h-[35px]'
        /> 
        <Image
        src={'/applestore.png'}
        height={41}
        width={140}
        alt='playstore'
        className=' cursor-pointer
        max-sm:w-[120px] max-sm:h-[35px]'
        /> </div>
        
    </div>
       <Image
       src={'/nineImg.png'}
         alt='nineimg'
            height={800}
            width={800}
            className=' absolute object-cover object-center w-[1004px] h-[620px]   
            -right-[46px] -top-[90px]  
            max-xl:w-[700px] max-xl:h-[500px] max-xl:-right-10 max-xl:-top-16
            max-lg:relative max-lg:w-full max-lg:h-[350px] max-lg:right-0 max-lg:top-0 max-lg:mt-8
            max-sm:h-[250px] max-sm:mt-6'
            /> 

    </div>
  )
}

export default Nine