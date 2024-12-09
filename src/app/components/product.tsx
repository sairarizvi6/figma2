'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

const Product = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/productlisting'); // Navigate to the product listing page
  };

  const products = [
    {
      id: 1,
      name: 'The popular suede sofa',
      price: '$980',
      image: '/images/large.png',
      alt: 'suede sofa',
    },
    {
      id: 2,
      name: 'The Dandy chair',
      price: '$250',
      image: '/images/chair.png',
      alt: 'dandy chair',
    },
    {
      id: 3,
      name: 'The Dandy chair',
      price: '$250',
      image: '/images/chair1.png',
      alt: 'dandy chair',
    },
  ];

  return (
    <>
      <section className="px-8 py-12 text-[#2A254B] mt-12">
        <h1 className="text-2xl">Our popular products</h1>

        {/* Flexbox layout for products */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {products.map((product) => (
            <article key={product.id} className="w-full md:w-[350px] h-auto">
              <Image
                src={product.image}
                height={800}
                width={800}
                alt={product.alt}
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4">
                <p className="py-2">{product.name}</p>
                <p>{product.price}</p>
              </div>
            </article>
          ))}
        </div>

        {/* View Collection Button */}
        <div className="my-10 flex justify-center items-center">
          <button
            className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B] hover:bg-[#eaeaea] transition-colors"
            onClick={handleNavigation}
            aria-label="View all products"
          >
            View products
          </button>
        </div>
      </section>
    </>
  );
};

export default Product;
