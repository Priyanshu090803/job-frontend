 
'use client'

import { Minus, Plus } from "lucide-react"
import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
  }
]

const Fifteen = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  function handleShow(index: number | null) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <div
      className='min-h-screen pb-10 bg-[#FBFBFB] w-full pt-[42px] px-[100px] space-y-[110px]
      max-xl:px-[60px] max-lg:px-[40px] max-md:px-[24px] max-sm:px-4 max-sm:space-y-12'
    >

      {/* HEADING */}
      <h2
        className='font-roboto font-bold tracking-tight uppercase text-[42px]
        max-lg:text-[32px] max-md:text-[28px] max-sm:text-[22px] max-sm:leading-[28px]'
      >
        FREQUENTLY ASKED QUESTIONS (FAQs)
      </h2>

      {/* FAQ BOXES WRAPPER */}
      <div
        className="w-full h-[528px] overflow-hidden
        max-md:h-auto max-md:overflow-visible"
      >
        {faqData.map((item, index) => (
          <div
            key={item.id}
            className="w-full border-t border-[#11111133] px-6 cursor-pointer hover:bg-gray-100 transition-all duration-300
              max-sm:px-3"
            onClick={() => handleShow(index)}
          >
            {/* HEADER (fixed 89px height) */}
            <div
              className="h-[89px] flex items-center justify-between relative
              max-sm:h-[70px]"
            >
              <h4
                className="font-semibold leading-[24px] font-inter
                max-sm:text-[15px]"
              >
                {item.question}
              </h4>

              {/* ICONS */}
              <Plus
                className={`h-5 w-5 absolute right-10 top-7 max-sm:right-4 max-sm:top-6 
                ${activeIndex === index ? 'hidden' : 'block'}`}
              />
              <Minus
                className={`h-5 w-5 absolute right-10 top-7 max-sm:right-4 max-sm:top-6 
                ${activeIndex === index ? 'block' : 'hidden'}`}
              />
            </div>

            {/* ANSWER SECTION */}
            <div
              className={`transition-all duration-300 overflow-hidden
              ${activeIndex === index ? "max-h-[174px] pb-4" : "max-h-0"}
              max-sm:text-[14px]`}
            >
              <p
                className="w-[786px] text-[18px] leading-[25px]
                max-xl:w-[600px] max-lg:w-[500px] max-md:w-full max-sm:text-[14px] max-sm:leading-[20px]"
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Fifteen
