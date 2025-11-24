import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

const Sixteen = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center
      max-xl:px-10 max-lg:px-8 max-md:px-6 max-sm:px-4"
    >
      <div
        className="h-[292px] w-[736px] flex flex-col items-center justify-between
        max-lg:w-[600px]
        max-md:w-[500px]
        max-sm:w-full max-sm:h-auto max-sm:gap-6"
      >

        {/* LOGO */}
        <span
          className='left-[70px] top-[44px] px-[25px] font-extrabold text-[32px] bg-[#DBDBDB] text-black
          max-lg:left-6 max-lg:top-6 max-lg:text-2xl max-lg:px-4
          max-md:left-4 max-md:top-4
          max-sm:left-3 max-sm:top-3 max-sm:text-xl max-sm:px-3
          hover:scale-105 transition-transform duration-300 cursor-pointer hidden md:block'
        >
          LOGO
        </span>

        {/* TEXT CONTENT */}
        <div
          className="h-[212px] flex flex-col items-center w-full text-center
          max-sm:h-auto max-sm:gap-4"
        >
          <h3
            className="uppercase tracking-tighter text-[42px] font-roboto font-bold
            max-lg:text-[36px]
            max-md:text-[30px]
            max-sm:text-[24px] max-sm:leading-[30px]"
          >
            Lorem ipsum dolor sit amet consectetur. Dui.
          </h3>

          <p
            className="w-[492px]
            max-lg:w-[420px]
            max-md:w-[360px]
            max-sm:w-full max-sm:text-[15px]"
          >
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>
        </div>

        {/* BUTTON */}
        <Button
          className='bg-[#1959AC] hover:bg-[#1959AC] text-[15px] h-[38px] rounded-md shadow-lg cursor-pointer shadow-neutral-200 font-inter text-white flex justify-center items-center gap-2 w-[179px]
          max-md:w-[200px]
          max-sm:w-full max-sm:h-[46px] mt-14
          max-sm:mt-8'
        >
          Loerum Ipsum
          <ArrowRight className='max-sm:w-4 max-sm:h-4' />
        </Button>

      </div>
    </div>
  )
}

export default Sixteen
