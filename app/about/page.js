import Image from 'next/image'
import React from 'react'

const about = () => {
  return (
    <section className="flex  flex-col container mt-[7rem] mb-[40px] mx-auto px-12 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white font-bold text-3xl py-4">
            About Us
          </h1>
          <p className="text-[#adb7be] pt-2">
            The right technology can make your tax department more efficient and effective.
            Streamlining and automating processes can free tax professionals to focus on high-value work, 
            while bringing accuracy, transparency, and control to your tax function and position. <br /> <br />
            Whether you need to evaluate tax policy and strategy, integrate systems, 
            improve internal processes and controls, or implement third-party or proprietary software, 
            we have the skills and tools to help you at any stage of your digital transformation. <br /> <br />
            Clear, experience-driven insights from our practitioners can help your global tax function stay 
            compliant and take swift, agile, and confident action
          </p>
        </div>
        <div className='col-span-5 place-self-center mt-4'>
            <Image
             src='/images/AboutImg.jpg' 
             alt='aboutus'
             width={500}
             height={500}
             />
        </div>
      </div>
    </section>
  )
}

export default about