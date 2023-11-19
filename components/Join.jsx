import React from "react";
import Image from "next/image";

const Join = () => {
  return (
    <section className="flex  flex-col container mt-[4rem] mb-[40px] mx-auto px-12 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-5 place-self-center mt-4">
          <Image
            className="rounded-xl"
            src="/images/career.webp"
            alt="tax Image"
            width={600}
            height={600}
          />
        </div>

        <div className="p-6 col-span-7 place-self-center">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl text-white">
            Join us
          </h1>
          <p className="text-[#adb7be] mb-6 text-lg lg:text-xl">
            Deciding the career for you is more than simply “landing the job."
            It’s finding a place where you know you make a difference each day,
            where you can be your most authentic self. It’s choosing your
            impact.
          </p>
          <div>
            <button className="px-6 w-full font-bold sm:w-fit py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Explore careers
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
