import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

const Brand = () => {
  return (
    <section>
      <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
        {/* Title */}
        <h1 className="text-center text-2xl md:text-3xl font-semibold mb-8">
          What Makes Our Brand Different
        </h1>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 text-base md:text-lg">
          {/* Feature 1 */}
          <div className="flex flex-col items-center p-6 md:p-8 bg-[#F9F9F9] rounded-lg shadow-md hover:shadow-lg transition">
            <TbTruckDelivery size={30} className="text-[#2A254B]" />
            <p className="py-4 font-semibold text-center">Next Day as Standard</p>
            <p className="text-center">Order before 3pm and get your order the next day as standard.</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center p-6 md:p-8 bg-[#F9F9F9] rounded-lg shadow-md hover:shadow-lg transition">
            <IoIosCheckmarkCircleOutline size={30} className="text-[#2A254B]" />
            <p className="py-4 font-semibold text-center">Made by True Artisans</p>
            <p className="text-center">Hand-crafted goods made with real passion and craftsmanship.</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center p-6 md:p-8 bg-[#F9F9F9] rounded-lg shadow-md hover:shadow-lg transition">
            <MdOutlinePriceChange size={30} className="text-[#2A254B]" />
            <p className="py-4 font-semibold text-center">Unbeatable Prices</p>
            <p className="text-center">For our material and quality, you won’t find better prices anywhere.</p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center p-6 md:p-8 bg-[#F9F9F9] rounded-lg shadow-md hover:shadow-lg transition">
            <LuSprout size={30} className="text-[#2A254B]" />
            <p className="py-4 font-semibold text-center">Recycled Packaging</p>
            <p className="text-center">We use 100% recycled packaging to ensure our footprint is manageable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
