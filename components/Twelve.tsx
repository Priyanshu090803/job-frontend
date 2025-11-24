import Image from 'next/image' 
import { ArrowRight } from 'lucide-react'

const Twelve = () => {
  return (
        <div className=' h-[726px]   mt-30 flex justify-center items-center font-inter
        max-lg:h-auto max-lg:mt-20 max-lg:px-6 max-lg:py-12
        max-sm:mt-12 max-sm:px-4 max-sm:py-8'>
            <div className=' w-[1280px] h-[406px]   flex gap-20 relative
            max-lg:w-full max-lg:h-auto max-lg:flex-col max-lg:gap-10
            max-sm:gap-8'>
                <Image
                src={'/twelveDecoration.svg'}
                alt='decoration'
                width={176}
                height={176}
                className=' absolute    object-cover h-[176px] w-[176px] top-[8%] left-[43%]  z-0
                max-lg:hidden'
                />
                <div className=' w-full   space-y-6 mt-6 z-10
                max-lg:mt-0
                max-sm:space-y-4'>
                    <h2 className=' font-roboto uppercase tracking-tight font-bold text-[42px]
                    max-lg:text-3xl
                    max-sm:text-2xl'>Lorem ipsum dolor sit amet</h2>
                    <div className=' flex h-[48px] w-full justify-center border rounded-lg text-[#0F172A] bg-white 
                    max-sm:flex-col max-sm:h-auto max-sm:rounded-md'>
                            <span className=' border-r w-full text-[20px] font-semibold bg-[#F1F5F9] justify-center flex items-center p-4 rounded-l-lg 
                            max-sm:border-r-0 max-sm:border-b max-sm:rounded-l-none max-sm:rounded-t-md max-sm:text-lg'>Research</span>
                            <span className=' border-r w-full text-[20px] font-semibold justify-center flex items-center p-4
                            max-sm:border-r-0 max-sm:border-b max-sm:text-lg'>Plan</span>
                            <span className='  w-full text-[20px] font-semibold justify-center flex items-center p-4 
                            max-sm:rounded-b-md max-sm:text-lg'>Design</span>
                    </div>
                <p className=' text-[#475569] leading-[25px] text-[18px]
                max-sm:text-base max-sm:leading-relaxed'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
                <button className='  w-[130px] h-[48px] bg-transparent text-[#1959AC] hover:bg-transparent cursor-pointer   font-semibold text-[16px] leading-[24px]  flex items-center gap-2 justify-start  
                max-sm:w-auto max-sm:text-sm'>Check tools<ArrowRight
                 className=' h-5 w-5
                 max-sm:h-4 max-sm:w-4'
                /></button>
                </div>
                <Image 
                src={'/twelve.png'}
                alt='twelve'
                width={600}
                height={406}
                className=' w-full object-cover z-10
                max-lg:h-[350px]
                max-sm:h-[250px]'
                />
            </div>

        </div>
  )
}

export default Twelve