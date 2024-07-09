import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col container mt-[8rem] mb-[px] mx-auto px-12 py-4 justify-center items-center">
      {/* <div className="grid grid-cols-1 sm:grid-cols-12"> */}
        {/* <div className="col-span-7 place-self-center"> */}
          <h1 className="font-bold mb-4 text-4xl sm:text-5xl lg:text-6xl text-white">
            Tax Technology
          </h1>
          <h1 className="font-bold text-2xl text-[#adb7be] mb-2">
            Digital tax solution to transform your business
          </h1>
          <p className="text-[#adb7be] mb-6 text-lg lg:text-xl">
            Technology has the power to transform your tax. We help
            to identify, design, implement, and maintain tax systems to bring
            accuracy, transparency, and control to your tax function and
            position
          </p>
          <div className='mt-9 p-6'>
            <button className="px-6 w-full sm:w-fit py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              <Link href='/services'>Services we offer</Link>
            </button>
            <button className="px-6 w-full sm:w-fit py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              <Link href='/contact'>Contact us</Link>
            </button>
          </div>
        {/* </div> */}

        {/* <div className="col-span-5 place-self-center mt-4">
          <Image
            className="rounded-xl"
            src="/images/taxImg.jpg"
            alt="tax Image"
            width={400}
            height={400}
          />
        </div> */}
      {/* </div> */}
    </section>
  )
}

export default Hero