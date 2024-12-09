import Image from 'next/image';
import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

const ProductListing = () => {
  const features = [
    {
      title: 'Next day as standard',
      description: 'Order before 3pm and get your order the next day as standard.',
      icon: TbTruckDelivery,
    },
    {
      title: 'Made by true artisans',
      description: 'Hand-crafted goods made with real passion and craftsmanship.',
      icon: IoIosCheckmarkCircleOutline,
    },
    {
      title: 'Unbeatable prices',
      description: 'For our material and quality, you won’t find better prices anywhere.',
      icon: MdOutlinePriceChange,
    },
    {
      title: 'Recycled packaging',
      description: 'We use 100% recycled packaging to ensure our footprint is manageable.',
      icon: LuSprout,
    },
  ];

  return (
    <>
      <section>
        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
          {/* Main Product Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Product Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={'/images/Image Left.png'}
                height={800}
                width={800}
                alt="The Dandy Chair"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col">
              <h2 className="text-xl md:text-2xl font-semibold">The Dandy Chair</h2>
              <p className="py-2 text-lg md:text-xl">$250</p>

              <div className="text-[#505977] text-sm md:text-base">
                <h3 className="font-semibold">Description</h3>
                <p className="my-4">
                  A timeless design, with premium materials features as one of our most popular
                  and iconic pieces. The Dandy Chair is perfect for any stylish living space with
                  beech legs and lambskin leather upholstery.
                </p>

                <ul className="list-disc space-y-1 ml-4">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>

                {/* Dimensions */}
                <div className="mt-8">
                  <h3 className="font-semibold">Dimensions</h3>
                  <div className="flex gap-12 mt-4 text-sm md:text-base">
                    <div>
                      <p>Height:</p>
                      <p>110cm</p>
                    </div>
                    <div>
                      <p>Width:</p>
                      <p>75cm</p>
                    </div>
                    <div>
                      <p>Depth:</p>
                      <p>50cm</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center mt-8 gap-6">
                  <div className="flex items-center gap-4">
                    <label>Amount:</label>
                    <div className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                      <span>+</span> 1 <span>-</span>
                    </div>
                  </div>
                  <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions Section */}
          <h2 className="text-xl md:text-2xl font-semibold mt-12 text-[#505977]">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {['chair', 'vase', 'silky', 'lamp'].map((item, idx) => (
              <div key={idx} className="w-full">
                <Image
                  src={`/images/${item}.png`}
                  height={700}
                  width={700}
                  alt={item}
                  className="w-full h-auto object-cover"
                />
                <div className="mt-4 text-[#2A254B]">
                  <p className="py-2">{item === 'chair' ? 'The Dandy Chair' : `The ${item}`}</p>
                  <p>${item === 'chair' ? 250 : item === 'vase' ? 155 : 125}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center">
            <button className="bg-[#F9F9F9] py-3 px-6 rounded-md text-[#2A254B]">
              View collection
            </button>
          </div>

          {/* Features Section */}
          <div className="flex flex-col md:flex-row gap-6 mt-12 text-sm md:text-base">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-start md:w-1/4 p-4 rounded-lg bg-gray-100"
                >
                  <Icon size={30} className="text-[#2A254B]" />
                  <h4 className="py-4 font-semibold">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListing;
