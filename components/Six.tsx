 
import Image from 'next/image';
import Link from 'next/link';

const Six = () => {
  const cards = [
    {
      id: 1,
      image: '/sixImg1.png',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.'
    },
    {
      id: 2,
      image: '/sixImg2.png',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.'
    },
    {
      id: 3,
      image: '/sixImg3.png',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.'
    },
    {
      id: 4,
      image: '/sixImg4.png',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.'
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden ">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/Bg-Graphic.svg"
          alt="Background Graphic"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-16 mt-25
      max-lg:px-6 max-lg:py-12 max-lg:mt-20
      max-sm:px-4 max-sm:py-8 max-sm:mt-16">
        <div className="relative mb-12 pl-8 space-y-4
        max-sm:pl-0 max-sm:mb-8 max-sm:space-y-3">

          <p className="text-[#0546D2] text-[26px] tracking-tight font-inter font-semibold 
          max-sm:text-xl">
            Lorem ipsum dolor sit amet
          </p>

          <h2 className="text-[42px] font-bold font-roboto text-black mb-6 uppercase tracking-tight
          max-lg:text-3xl
          max-sm:text-2xl max-sm:mb-4">
            LOREM IPSUM DOLOR SIT
          </h2>

          <p className="text-base font-inter max-w-3xl leading-relaxed leading-[25px]
          max-lg:max-w-full
          max-sm:text-sm max-sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </p>
        </div>

        <div className="flex flex-col gap-8
        max-sm:gap-6">
          <div className="flex gap-8 justify-center flex-wrap 
          max-lg:gap-6
          max-sm:gap-4">
            {cards.map((card) => (
              <div key={card.id} className=" flex flex-col w-[445px] h-[560px]  border border-neutral-300 rounded-lg bg-white space-y-[35px] 
              max-lg:w-[calc(50%-12px)] max-lg:h-auto max-lg:space-y-5
              max-sm:w-full max-sm:space-y-4">
                <div className="relative rounded-t-lg  w-[445px] h-[205px] mb-5 overflow-hidden
                max-lg:w-full max-lg:h-[200px]
                max-sm:h-[180px] max-sm:mb-3">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="   mx-2 font-semibold font-inter text-black  mb-3 leading-tight text-[20px] 
                max-sm:text-lg max-sm:mb-2">
                  {card.title}
                </h3>
                <p className="text-[18px] font-inter mx-2  leading-[25px] mb-4
                max-sm:text-base max-sm:leading-relaxed max-sm:mb-3">
                  {card.description}
                </p>
                <Link 
                  href="#" 
                  className="text-[#0546D2] text-[16px] font-inter font-medium  underline underline-offset-4 inline-block mx-2 tracking-tight
                  max-sm:text-sm max-sm:mb-4"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Six;