import Image from 'next/image';
import React from 'react';

const Ceramics = () => {
  return (
    <section>
      <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center">New Ceramics Collection</h1>

        {/* Product Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {/* Product 1 */}
          <div className="w-full h-auto">
            <Image
              src="/images/chair.png"
              height={700}
              width={700}
              alt="Dendy Chair"
              className="w-full h-[80%] object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 text-[#2A254B] text-center">
              <p className="py-2 font-semibold">The Dendy Chair</p>
              <p>$250</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-full h-auto">
            <Image
              src="/images/vase.png"
              height={700}
              width={700}
              alt="Rustic Vase"
              className="w-full h-[80%] object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 text-[#2A254B] text-center">
              <p className="py-2 font-semibold">Rustic Vase Set</p>
              <p>$155</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-full h-auto">
            <Image
              src="/images/silky.png"
              height={700}
              width={700}
              alt="Silky Vase"
              className="w-full h-[80%] object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 text-[#2A254B] text-center">
              <p className="py-2 font-semibold">The Silky Vase</p>
              <p>$125</p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-full h-auto">
            <Image
              src="/images/lamp.png"
              height={700}
              width={700}
              alt="Lucky Lamp"
              className="w-full h-[80%] object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 text-[#2A254B] text-center">
              <p className="py-2 font-semibold">The Lucky Lamp</p>
              <p>$399</p>
            </div>
          </div>
        </div>

        {/* View Collection Button */}
        <div className="my-10 flex justify-center items-center">
          <button className="bg-[#F9F9F9] py-4 px-6 rounded-lg text-[#2A254B] font-semibold shadow-md hover:bg-[#E0E0E0] transition">
            View Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ceramics;
