import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Thirteen = () => {
  return (
    
    <div className="max-w-[1547px] w-full flex flex-col gap-8 bg-[#f1f1f1] h-auto lg:h-[724px] items-start justify-between relative mb-12 lg:mb-50">
  {/* Left Content Section */}
  <div className="flex-1 px-6 sm:px-10 lg:px-[140px] py-8 lg:py-15">
    {/* Main Heading */}
    <div className="space-y-5 w-full max-w-full lg:max-w-[612px]">
      <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0047BB] leading-tight uppercase">
        LOREM IPSUM DOLOR SIT
        <br />
        AMET CONSECTETUR.
        <br />
        DIGNISSIM TELLUS.
      </h1>

      <p className="text-base sm:text-lg leading-[1.3] text-black max-w-xl">
        Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar.
        Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa
        in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
      </p>
    </div>

    <div className="mt-8 sm:mt-10">
      <button className="bg-[#1959AC] text-white px-6 py-2.5 rounded-[5px] flex items-center gap-2.5 font-bold">
        Loerum Ipsum <ArrowRight className="w-5 h-5" />
      </button>
    </div>

    <div className="relative lg:absolute w-full max-w-full lg:w-[546px] lg:left-[140px] lg:top-[500px] mt-10 lg:mt-0">
      <div className="h-auto lg:h-[395px] bg-white py-8 px-6 sm:py-12 sm:px-10 space-y-6 sm:space-y-10 shadow">
        <div className="absolute top-2 right-4 sm:top-[2px] sm:right-8 w-10 h-10 sm:w-[50px] sm:h-[50px]">
          <Image 
            src="/thirteenpin.png" 
            alt="Pin icon"
            width={50}
            height={50}
            className="w-full h-full object-contain"
          />
        </div>

        <h4 className="text-lg sm:text-[20px] font-semibold">Lorem ipsum dolor sit</h4>

        <div className="space-y-3 sm:space-y-4">
          <p className="text-base sm:text-lg leading-[1.3]">Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.</p>
          <p className="text-base sm:text-lg leading-[1.3]">Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit.</p>
          <p className="text-base sm:text-lg leading-[1.3]">Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="relative w-full lg:absolute lg:right-[48px] lg:top-[-70px] lg:w-[570px] h-[300px] sm:h-[400px] lg:h-[570px] mt-8 lg:mt-0">
    <Image
      src="/thirteen.png"
      alt="Main content"
      fill
      className="object-cover"
    />
  </div>

  <div className="w-full max-w-[1295px] h-5 mx-auto bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] mt-8 lg:mt-0" />
</div>      
  )
}

export default Thirteen