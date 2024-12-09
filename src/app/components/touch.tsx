import Image from 'next/image';
import React from 'react';

const Touch = () => {
  return (
    <section className="py-12 text-[#2A254B] mt-12">
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-[720px] px-6 md:px-12 py-8 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold leading-relaxed">
              From a studio in London to a global brand with <br /> over 400 outlets
            </h1>
            <p className="py-6 text-lg md:text-xl leading-relaxed">
              When we started Avion, the idea was simple: make high-quality furniture <br /> 
              affordable and available for the mass market.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Handmade and lovingly crafted furniture and homeware is what we live, <br /> 
              breathe, and design. Our Chelsea boutique became the hub for the <br /> 
              London interior design community.
            </p>
          </div>
          <div className="mt-10">
            <button
              className="bg-[#F9F9F9] py-4 px-6 rounded-lg text-[#2A254B] text-sm font-medium shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2A254B] transition-all"
              aria-label="Get in touch"
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[890px]">
          <Image
            src="/images/blend.png"
            height={800}
            width={800}
            alt="Modern and stylish chair"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Touch;
