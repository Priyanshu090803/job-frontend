import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

const BlueButton = () => {
  return (
   <Button className=' bg-[#1959AC] text-[15px] h-full rounded-lg shadow-lg cursor-pointer shadow-neutral-200  font-inter text-white flex justify-center items-center gap-2 w-[179px]
        max-sm:w-full max-sm:h-[46px]'>Loerum Ipsum<ArrowRight/></Button>
  )
}

export default BlueButton