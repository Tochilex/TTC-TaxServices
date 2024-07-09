import React from "react";

const services = () => {
  return (
    <section className="container max-w-[1240px] mt-[6rem] mb-[40px] mx-auto px-12 py-4">
      <div className=" text-white text-center">
        <h1 className="font-bold text-3xl mb-3">
          Tax Technology Consulting Services
        </h1>
        {/* <p className='py-5 text-left text-[#adb7be]'>Whether you need to evaluate tax policy and strategy, integrate systems, improve internal processes and controls,
               or implement third-party or proprietary software, we have the skills and tools to help you at
               any stage of your digital transformation. Deloitte’s tax technology systems professionals are experienced in implementing leading 
               third party direct and indirect tax software.  
            </p> */}
        <div className="flex justify-center"> 
          <p className="py-5 text-center text-[#adb7be] w-[80%]">
            Empowering tax effieceincy through innovative solutions, we bridge
            the gap between tax expertise and cutting edge technology. Below are
            the digital services we offer:
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5 px-3 mt-5">
        <div className="border border-green-300 p-4 rounded-xl shadow-xl">
          <h1 className="text-white text-2xl py-4">Neptune (HR Payroll services)</h1>
          <p className="text-[#adb7be]">Simplfy your payroll calculations with this amazing tool</p>
          <p className="text-blue-300 underline mt-9">
            <a href="#">Find out more</a>
          </p>
        </div>

        <div className="border border-green-300 p-4 rounded-xl shadow-xl">
          <h1 className="text-white text-2xl py-4">Tax Computation Tool</h1>
          <p className="text-[#adb7be]">Calculate your CIT, TET, PTFL with just a click</p>
          <p className="text-blue-300 underline mt-16">
            <a href="#">Find out more</a>
          </p>
        </div>

        <div className="border border-green-300 p-4 rounded-xl shadow-xl">
          <h1 className="text-white text-2xl py-4">Interest Expense Analyser</h1>
          <p className="text-[#adb7be]">Cut through the complexities of manual interest analysis by utilizing this tool 
            (Recommended for financial institutions)</p>
          <p className="text-blue-300 underline mt-9">
            <a href="#">Find out more</a>
          </p>
        </div>

         <div className="border border-green-300 p-4 rounded-xl shadow-xl">
          <h1 className="text-white text-2xl py-4">Tax Dashboard</h1>
          <p className="text-[#adb7be]">Provides high level overview of tax positions for management decision making.</p>
          <p className="text-blue-300 underline mt-9">
            <a href="#">Find out more</a>
          </p>
        </div>

        <div className="border border-green-300 p-4 rounded-xl shadow-xl">
          <h1 className="text-white text-2xl py-4">Digital Tax Memo</h1>
          <p className="text-[#adb7be]">Create, customise and deliver tax memos effortlessly</p>
          <p className="text-blue-300 underline mt-9">
            <a href="#">Find out more</a>
          </p>
        </div> 
      </div>
    </section>
  );
};

export default services;
