import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Eight = () => {
  return (
    <div className='  w-full flex flex-col justify-center items-center   pt-30 space-y-20'> 
        <h2 className=' text-[42px] tracking-tight font-bold font-roboto'>REQUEST A QUOTE</h2>
        <div
        className=' w-[1108px] h-[806px]   '
        >
           <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          <div className="flex flex-col md:col-span-1 gap-3">
            <label className="text-sm mb-1">Name</label>
            <input className="border-[0.5px] hover:border-[#9F9F9F] border-neutral-400 bg-[#F4F4F4] focus:outline-[#9F9F9F] rounded-md h-10 px-3" type="text" />
          </div>

          <div className="flex flex-col md:col-span-1 gap-3">
            <label className="text-sm mb-1">E-mail</label>
            <input className="border-[0.5px] hover:border-[#9F9F9F] border-neutral-400 bg-[#F4F4F4] focus:outline-[#9F9F9F] rounded-md h-10 px-3" type="email" />
          </div>

          <div className="flex flex-col md:col-span-1 gap-3">
            <label className="text-sm mb-1">Phone Number</label>
            <input className="border-[0.5px] hover:border-[#9F9F9F] border-neutral-400 bg-[#F4F4F4] focus:outline-[#9F9F9F] rounded-md h-10 px-3" type="text" />
          </div>

          <div className="flex flex-col md:col-span-1 gap-3">
            <label className="text-sm mb-1">Time Frame<span className="text-red-500">*</span></label>
            <select className=" text-neutral-400 border-[0.5px] hover:border-[#9F9F9F] border-neutral-400 bg-[#F4F4F4] focus:outline-[#9F9F9F] rounded-md h-10 px-3">
              <option>Choose Time Frame</option>
            </select>
          </div>

          <div className="flex flex-col md:col-span-1 gap-3">
            <label className="text-sm mb-1">Size<span className="text-red-500">*</span></label>
            <select className=" text-neutral-400 border-[0.5px] hover:border-[#9F9F9F] border-neutral-400 bg-[#F4F4F4] focus:outline-[#9F9F9F] rounded-md h-10 px-3">
              <option>Choose Size</option>
            </select>
          </div>

          <div className="flex flex-col md:col-span-1 gap-3">
            <label className="text-sm mb-1">Quantity<span className="text-red-500">*</span></label>
            <select className=" text-neutral-400 border-[0.5px] hover:border-[#9F9F9F] border-neutral-400 bg-[#F4F4F4] focus:outline-[#9F9F9F] rounded-md h-10 px-3 ">
              <option>Choose Quantity</option>
            </select>
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2 gap-3">
            <label className="text-sm mb-1">Please Describe Your Project<span className="text-red-500">*</span></label>
            <textarea
              className="border-[0.5px] hover:border-[#9F9F9F] border-neutral-400 bg-[#F4F4F4] focus:outline-[#9F9F9F] rounded-md px-3 py-2 min-h-[160px]"
              placeholder="Choose a project type"
            ></textarea>
          </div>
        </form>
        <div className=' flex justify-center items-center flex-col mt-12 text-[#3C3C3C]'>
          <p>By submitting this form you agree to our <span className=' underline underline-offset-2'>Terms of Service</span>  and <span className=' underline underline-offset-2'>Privacy Policy</span>.</p>
        <Button className='  bg-[#1959AC] text-[15px] h-full rounded-md shadow-lg cursor-pointer shadow-neutral-200  font-inter text-white flex justify-center items-center gap-2 w-[179px]
        max-sm:w-full max-sm:h-[46px] mt-14'>Loerum Ipsum<ArrowRight/></Button>

        </div>
        </div>
    </div>
  )
}

export default Eight