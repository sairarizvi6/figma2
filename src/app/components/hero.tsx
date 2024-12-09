import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section>
      <div className='px-8 py-12'>
        <div className='flex flex-col md:flex-row'>
          {/* Left Section */}
          <div className='w-full md:w-[60%] h-auto md:h-[580px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between'>
            <div>
              <h1 className='text-xl md:text-3xl font-semibold md:text-left'>
                The furniture brand of tomorrow, with <br /> timeless, cutting-edge designs
              </h1>
              <div className='flex justify-center md:justify-start'>
                <button className='w-[170px] h-[56px] bg-transparent text-white border border-gray-600 font-bold mt-12 hover:bg-[#4E4D93] transition'>
                  View Collection
                </button>
              </div>
            </div>

            <div className='my-4 md:my-0'>
              <p className='text-sm md:text-base md:text-left'>
                Experience the future of eco-friendly luxury with Avion, where timeless design meets innovative craftsmanship, all displayed through modern web technologies.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className='w-full md:w-[40%] h-auto md:h-[580px] bg-white flex justify-center items-end'>
            <Image src='/images/rightt.png' width={400} height={400} alt='Right Image' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
