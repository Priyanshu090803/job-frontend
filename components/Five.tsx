import { brandLogos } from '@/data/brandLogos';
import Image from 'next/image';

const Five = () => {
  const row1 = [brandLogos.brands[0], brandLogos.brands[1], brandLogos.brands[6], brandLogos.brands[7]];  
  const row2 = [brandLogos.brands[2], brandLogos.brands[3], brandLogos.brands[8], brandLogos.brands[9]];  
  const row3 = [brandLogos.brands[4], brandLogos.brands[5], brandLogos.brands[10], brandLogos.brands[11]];  

  return (
    <div className="h-full py-32    w-full flex justify-center items-center
    max-lg:py-20
    max-sm:py-12">
      <div className="w-[1112px] h-[596px] flex flex-col items-center justify-center
      max-lg:w-full max-lg:h-auto max-lg:px-6
      max-sm:px-4">
        {/* Heading */}
        <h2 className="text-[42px] font-bold font-roboto mb-12 text-center w-[655px] tracking-tight
        max-lg:text-3xl max-lg:w-full max-lg:mb-10
        max-sm:text-2xl max-sm:mb-8">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. COMMODO LEO AMET.
        </h2>
        
        <div className="flex flex-col gap-8
        max-sm:gap-6">
          <div className="flex gap-[120px] justify-center items-center
          max-lg:gap-12 max-lg:flex-wrap
          max-sm:gap-8 max-sm:grid max-sm:grid-cols-2">
            {row1.map((brand) => (
              <div key={brand.id} className="flex items-center justify-center">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={150}
                  height={80}
                  className="object-contain
                  max-lg:w-[120px] max-lg:h-[64px]
                  max-sm:w-[100px] max-sm:h-[53px]"
                />
              </div>
            ))}
          </div>
          
          <div className="flex gap-[120px] justify-center items-center
          max-lg:gap-12 max-lg:flex-wrap
          max-sm:gap-8 max-sm:grid max-sm:grid-cols-2">
            {row2.map((brand) => (
              <div key={brand.id} className="flex items-center justify-center">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={150}
                  height={80}
                  className="object-contain
                  max-lg:w-[120px] max-lg:h-[64px]
                  max-sm:w-[100px] max-sm:h-[53px]"
                />
              </div>
            ))}
          </div>
          
          <div className="flex gap-[100px] justify-center items-center
          max-lg:gap-12 max-lg:flex-wrap
          max-sm:gap-8 max-sm:grid max-sm:grid-cols-2">
            {row3.map((brand) => (
              <div key={brand.id} className="flex items-center justify-center">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={150}
                  height={80}
                  className="object-contain
                  max-lg:w-[120px] max-lg:h-[64px]
                  max-sm:w-[100px] max-sm:h-[53px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Five