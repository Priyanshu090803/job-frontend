import { ArrowRight, Phone } from 'lucide-react'
import Image from 'next/image'
import LinearSpan from './utils/LinearSpan'

const Second = () => {
  return (
    <div className=' h-full  w-full relative   flex justify-end 
    max-lg:justify-center max-lg:px-4
    max-sm:px-3'>
       <div className=' z-10  w-[1360px] relative h-[989px] flex gap-4 border-t border-l border-[#D4D4D4]  pr-10 pl-6 mt-30 shadow-lg shadow-neutral-300
       max-xl:w-full max-xl:h-auto max-xl:flex-col max-xl:pr-4 max-xl:pb-10
       max-lg:mt-20
       max-sm:pl-4 max-sm:pr-3 max-sm:mt-16'>
       <div className=' absolute bg-linear-to-r from-[#043898] via-[#079902] to-[#170041] left-0 -bottom-1 w-[97%]  h-4'/>

       <div className=' h-full w-full  flex flex-col gap-4 mt-6 '>
        <div className=' font-inter'>
          <h4 className=' text-[24px] text-[#0546D2] font-semibold
          max-sm:text-xl'>Lorem ipsum dolor sit</h4>
            <h2  className=' text-[42px] uppercase font-bold w-[325px] font-roboto    
            max-lg:text-3xl max-lg:w-full
            max-sm:text-2xl'>Lorem ipsum dolor sit amet</h2>
            <p className=' font-inter leading-[25px] w-[593px]
            max-lg:w-full
            max-sm:text-sm max-sm:leading-relaxed'>Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.</p>
        </div>
        <div className=' w-[594px] h-[471px]    space-y-6
        max-lg:w-full max-lg:h-auto
        max-sm:space-y-4'>
          <div className=' flex items-center gap-4 
          max-sm:gap-3'>
            <Image
            src={'/secondpageImg1.png'}
            alt='img1'
            height={146}
            width={146}
            className=' -ml-[7px]
            max-sm:w-[100px] max-sm:h-[100px] max-sm:ml-0'
            />
            <p className=" w-[376px]
            max-lg:w-full max-lg:flex-1
            max-sm:text-sm">Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.</p>
          </div> 
          <div className=' flex items-center gap-4 
          max-sm:gap-3'>
            <Image
            src={'/secondpageImg2.png'}
            alt='img1'
            height={141}
            width={141}
            className='-ml-[6px]
            max-sm:w-[100px] max-sm:h-[100px] max-sm:ml-0'
            />
            <p className=" w-[357px]
            max-lg:w-full max-lg:flex-1
            max-sm:text-sm">Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.</p>
          </div>  
          <div className=' flex items-center gap-4 
          max-sm:gap-3'>
            <Image
            src={'/secondpageImg3.png'}
            alt='img1'
            height={151}
            width={144}
            className=' -mt-[6px] -ml-[7px]
            max-sm:w-[100px] max-sm:h-[100px] max-sm:mt-0 max-sm:ml-0'
            />
            <p className=" w-[374px]
            max-lg:w-full max-lg:flex-1
            max-sm:text-sm">Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.</p>
          </div> 
        </div>
       </div>
       <div className=' absolute bottom-[103px]   w-[315px] h-[38px] flex gap-3
       max-xl:relative max-xl:bottom-auto max-xl:mt-6 max-xl:mb-4
       max-sm:flex-col max-sm:w-full max-sm:h-auto max-sm:gap-4'>
        <button className=' bg-[#1959AC] text-[15px] h-full rounded-lg shadow-lg cursor-pointer shadow-neutral-200  font-inter text-white flex justify-center items-center gap-2 w-[179px]
        max-sm:w-full max-sm:h-[46px]'>Loerum Ipsum<ArrowRight/></button>
        <span   className=' flex items-center justify-center   gap-2 text-[15px]   text-[#043898]'><Phone className=' h-[18px] '/>123456789</span>
       </div>
        <Image
        className=' h-[803px] w-[629px] object-cover object-right mt-10
        max-xl:w-full max-xl:h-[400px] max-xl:mt-6
        max-sm:h-[280px]'
        src={"/secondBike.png"}
        height={803}
        width={629}
        alt='secondbike'
        />
        </div> 
        <LinearSpan/>
    </div>
  )
}

export default Second 