"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
;

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [navBg, setNavBg] = useState('#121212')


  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <div style={{backgroundColor: `${navBg}`}} className="fixed text-white w-full h-20 shadow-xl z-[100}">
      <div className="flex justify-between px-9 items-center w-full h-full">
        {/* <Image src='' alt='' /> */}
        <h1 className="font-bold text-4xl pb-3 text-white">
          TTC<span className="text-green-500 font-bold text-6xl">.</span>
        </h1>

        <div className="pt-2 px-7">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-green-600">Home</li>
            </Link>
            {/* <Link href="/about">
              <li className="ml-10 text-sm uppercase hover:border-b border-green-600">About</li>
            </Link> */}
            <Link href="/services">
              <li className="ml-10 text-sm uppercase hover:border-b border-green-600">
                Services
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm uppercase hover:border-b border-green-600">
                Contact
              </li>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#c3c6c9] px-5  ease-in duration-500' : 
                      'fixed left-[-100%] top-0 px-5  ease-in duration-500'
                    }>
          <div>
            <div className="flex w-full justify-between items-center my-3 border-b border-gray-400 pb-2">
              {/* <Image src='' alt='' /> */}
              <h1 className="font-bold text-4xl pb- text-black">
                Deloitte
                <span className="text-green-500 font-bold text-6xl">.</span>
              </h1>

              <div onClick={handleNav}>
              <AiOutlineClose size={25} className="text-black mt-6 cursor-pointer" />
            </div>
            </div>
            <div className="py-5">
              <ul className="uppercase">
                <Link href='/'>
                  <li onClick={() => setNav(false)} className="py-8 text-black text-sm border-b border-gray-300">Home</li>
                </Link>
                {/* <Link href='/about'>
                  <li onClick={() => setNav(false)} className="py-8 text-black text-sm border-b border-gray-300">About</li>
                </Link> */}
                <Link href='/services'>
                  <li onClick={() => setNav(false)} className="py-8 text-black text-sm border-b border-gray-300">Services</li>
                </Link>
                <Link href='/contact'>
                  <li onClick={() => setNav(false)} className="py-8 text-black text-sm">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
