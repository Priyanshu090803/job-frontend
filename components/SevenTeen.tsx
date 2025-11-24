
const SevenTeen = () => {
    return (
    <div className='h-[546px] w-full bg-[#171E2B] relative py-10'>

      {/* LOGO */}
      <span
        className='absolute left-[80px] top-[40px] px-[25px] font-extrabold text-[32px] bg-[#DBDBDB] text-black
          max-xl:left-[50px] 
          max-lg:left-6 max-lg:top-6 max-lg:text-2xl max-lg:px-4
          max-md:left-4 max-md:top-4
          max-sm:left-3 max-sm:top-3 max-sm:text-xl max-sm:px-3
          shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer hidden md:block'
      >
        LOGO
      </span>

      {/* FOOTER GRID */}
      <div
        className='absolute top-[98px] left-[392px] flex gap-[60px]
          max-2xl:left-[320px]
          max-xl:left-[250px]
          max-lg:left-[150px] 
          max-md:left-[80px] 
          max-sm:static max-sm:mt-[140px] max-sm:px-6 max-sm:flex-col max-sm:gap-12'
      >

        {/* COLUMN 1 */}
        <div className='flex flex-col w-[181px] gap-[24px] text-white
            max-sm:w-full'>
          <h4 className='font-bold text-[20px] leading-[23px] tracking-[-4%]
              max-sm:text-[18px]'>
            Lorem Ipsum
          </h4>

          <div className='flex flex-col gap-[12px] text-[18px] leading-[23px] tracking-[-4%]
              max-sm:text-[16px]'>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className='flex flex-col w-[181px] gap-[24px] text-white
            max-sm:w-full'>
          <h4 className='font-bold text-[20px] leading-[23px] tracking-[-4%]
              max-sm:text-[18px]'>
            Lorem Ipsum
          </h4>

          <div className='flex flex-col gap-[12px] text-[18px] leading-[23px] tracking-[-4%]
              max-sm:text-[16px]'>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className='flex flex-col w-[181px] gap-[24px] text-white
            max-sm:w-full'>
          <h4 className='font-bold text-[20px] leading-[23px] tracking-[-4%]
              max-sm:text-[18px]'>
            Lorem Ipsum
          </h4>

          <div className='flex flex-col gap-[12px] text-[18px] leading-[23px] tracking-[-4%]
              max-sm:text-[16px]'>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>

        {/* COLUMN 4 */}
        <div className='flex flex-col w-[181px] gap-[24px] text-white
            max-sm:w-full'>
          <h4 className='font-bold text-[20px] leading-[23px] tracking-[-4%]
              max-sm:text-[18px]'>
            Lorem Ipsum
          </h4>

          <div className='flex flex-col gap-[12px] text-[18px] leading-[23px] tracking-[-4%]
              max-sm:text-[16px]'>
            <p>Lorem Ipsum</p>
          </div>
        </div>

      </div>
    </div>
  )
 
}

export default SevenTeen