 
"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar=()=> {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 flex items-center justify-between px-20
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${scrolled
          ? "bg-white/50 backdrop-blur-md shadow-md h-[110px]"
          : "bg-transparent h-[110px]"}
        max-lg:px-6 max-lg:h-[80px]
        max-sm:px-4
      `}
    >
      <span className=" md:w-39 w-20   bg-[#DBDBDB] font-extrabold text-[32px] uppercase flex justify-center px-[25px] py-2 
      max-lg:text-2xl max-lg:px-4 max-lg:py-1
      max-sm:text-xl max-sm:px-3">Logo</span>
      
      {/* Desktop Menu */}
      <div className=" flex justify-between gap-10 w-[458px] text-[#1959AC] 
      max-lg:hidden">
        <span className=" flex cursor-pointer">Lorem Ipsum <ChevronDown/></span>
        <span className=" flex cursor-pointer">Lorem Ipsum <ChevronDown/></span>
        <span className=" flex cursor-pointer">Lorem Ipsum <ChevronDown/></span>
      </div>
      
      <button className="  w-[125px] h-[38px] font-bold rounded-lg cursor-pointer bg-white shadow shadow-[#00000026]
      max-lg:hidden">SignIn</button>

      {/* Mobile Menu Button */}
      <button 
        className="hidden max-lg:flex items-center justify-center w-10 h-10 text-[#1959AC]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="hidden max-lg:flex flex-col absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-6 px-6 space-y-4">
          <span className="flex cursor-pointer text-[#1959AC] py-2 border-b border-gray-100">Lorem Ipsum <ChevronDown/></span>
          <span className="flex cursor-pointer text-[#1959AC] py-2 border-b border-gray-100">Lorem Ipsum <ChevronDown/></span>
          <span className="flex cursor-pointer text-[#1959AC] py-2 border-b border-gray-100">Lorem Ipsum <ChevronDown/></span>
          <button className="w-full h-[46px] font-bold rounded-lg cursor-pointer bg-[#1959AC] text-white shadow mt-2">SignIn</button>
        </div>
      )}
    </nav>
  );
}
export default Navbar