// import { ArrowRight } from "lucide-react"

 

// const Four = () => {
//   return (
//     <div className=' text-white font-inter h-[652px] w-full mt-40   py-[44px] px-[70px] relative '
//      style={{backgroundImage:"url('/pagefour.png')", backgroundSize:"cover",objectFit:"cover",backgroundPosition:"top-10"}}
//     >
//     <div className="   absolute h-full w-full top-0 left-0 bg-black opacity-40"/>

//     <span className=' absolute left-[70px] top-[44px] px-[25px] font-extrabold text-[32px] bg-[#DBDBDB]  text-black '>LOGO</span>
    
//     <div className=" h-full w-full top-0 left-0  flex flex-col justify-center items-center space-y-4  absolute  ">
//         <h2 className=" text-[42px] w-[900px]  font-roboto font-bold   uppercase tracking-tight">Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.</h2>
//         <p className=" w-[732px] text-center leading-[25px] font-semibold text-[18px]">Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.</p>
        
//         <p  className=" w-[732px] text-center leading-[25px] font-semibold text-[18px]">Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.</p>
//         <span className=" flex gap-2 bg-white text-[#1959AC] px-4 py-[9px] rounded-lg font-bold">Loerum Ipsum <ArrowRight/></span>
//         </div>
//             </div>
//   )
// }

// export default Four

"use client"
import { ArrowRight } from "lucide-react"

const Four = () => {
  return (
    <div className=' text-white font-inter h-[652px] w-full mt-40   py-[44px] px-[70px] relative 
    max-lg:h-auto max-lg:min-h-[500px] max-lg:mt-24 max-lg:px-6 max-lg:py-10
    max-sm:mt-16 max-sm:px-4 max-sm:py-8 max-sm:min-h-[450px]
    overflow-hidden'
     style={{backgroundImage:"url('/pagefour.png')", backgroundSize:"cover",objectFit:"cover",backgroundPosition:"top-10"}}
    >
    {/* Enhanced overlay with gradient instead of flat black */}
    <div className="   absolute h-full w-full top-0 left-0 bg-black opacity-40
    bg-gradient-to-b from-black/60 via-black/40 to-black/70"/>

    {/* Decorative blur circles for depth */}
    <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl max-lg:hidden"/>
    <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-3xl max-lg:hidden"/>

    <span className=' absolute left-[70px] top-[44px] px-[25px] font-extrabold text-[32px] bg-[#DBDBDB]  text-black 
    max-lg:left-6 max-lg:top-6 max-lg:text-2xl max-lg:px-4
    max-sm:left-4 max-sm:top-4 max-sm:text-xl max-sm:px-3
    shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer'>LOGO</span>
    
    <div className=" h-full w-full top-0 left-0  flex flex-col justify-center items-center space-y-4  absolute  
    max-lg:px-6 max-lg:py-20
    max-sm:px-4 max-sm:py-16 max-sm:space-y-3">
        <h2 className=" text-[42px] w-[900px]  font-roboto font-bold   uppercase tracking-tight
        max-lg:w-full max-lg:text-3xl max-lg:text-center
        max-sm:text-xl max-sm:leading-tight
        drop-shadow-lg text-center">Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.</h2>
        
        <p className=" w-[732px] text-center leading-[25px] font-semibold text-[18px]
        max-lg:w-full max-lg:text-base
        max-sm:text-sm max-sm:leading-relaxed max-sm:font-medium
        text-white/90 drop-shadow-md">Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.</p>
        
        <p  className=" w-[732px] text-center leading-[25px] font-semibold text-[18px]
        max-lg:w-full max-lg:text-base
        max-sm:text-sm max-sm:leading-relaxed max-sm:font-medium
        text-white/90 drop-shadow-md">Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.</p>
        
        <span className=" flex gap-2 bg-white text-[#1959AC] px-4 py-[9px] rounded-lg font-bold
        max-sm:text-sm max-sm:px-3 max-sm:py-2
        shadow-xl shadow-black/30 hover:bg-[#1959AC] hover:text-white hover:scale-105 hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer group mt-4">
          Loerum Ipsum <ArrowRight className="max-sm:w-4 max-sm:h-4 group-hover:translate-x-1 transition-transform duration-300"/>
        </span>
        </div>
    </div>
  )
}

export default Four