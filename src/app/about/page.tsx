import React from "react";

const AboutPage = () => {
  const features = [
    {
      img: "/images/Delivery.png",
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard.",
    },
    {
      img: "/images/check.png",
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship.",
    },
    {
      img: "/images/Purchase.png",
      title: "Unbeatable prices",
      description: "For our materials and quality, you won’t find better prices anywhere.",
    },
    {
      img: "/images/Sprout.png",
      title: "Recycled packaging",
      description: "We use 100% recycled materials to ensure our footprint is more manageable.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8">
        <h2 className="text-lg md:text-xl text-center md:text-left text-custom-purple font-medium md:w-2/4">
          A brand built on the love of craftsmanship, quality, and outstanding customer service.
        </h2>
        <div className="mt-6 md:mt-0">
          <button className="bg-gray-300 text-custom-purple py-3 px-6 rounded">
            Explore Products
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section className="flex flex-col md:flex-row items-center justify-around px-6 py-12">
        <div className="bg-custom-purple text-white p-6 md:p-10 w-full md:w-2/5">
          <h3 className="text-xl font-semibold">It started with a small idea</h3>
          <p className="mt-4">
            Our journey began in a small South London studio in early 2014. Since then, we’ve grown into a global brand with strong local roots.
          </p>
          <button className="bg-input-bg text-white mt-6 py-3 px-6 rounded">
            View Collection
          </button>
        </div>
        <div className="w-full md:w-2/5 mt-8 md:mt-0">
          <img src="/images/About main.png" alt="Our story image" className="w-full" loading="lazy" />
        </div>
      </section>

      {/* Service Section */}
      <section className="flex flex-col md:flex-row items-center px-6 py-12 space-y-6 md:space-y-0">
        <div className="w-full md:w-2/5">
          <img src="/images/About second.png" alt="Service" className="w-full" loading="lazy" />
        </div>
        <div className="bg-gray-100 border border-gray-300 p-6 md:p-10 w-full md:w-3/5">
          <h3 className="text-lg md:text-xl text-custom-purple font-semibold">
            Exceptional service tailored for you
          </h3>
          <p className="text-custom-purple mt-4">
            Avion was created with a vision to provide handmade, high-quality furniture at affordable prices. From our Chelsea boutique, we’ve inspired the London interior design community.
          </p>
          <button className="bg-custom-purple text-white mt-6 py-3 px-6 rounded">
            Contact Us
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-12">
        <h3 className="text-center text-custom-purple text-lg font-medium">
          What makes us stand out
        </h3>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {features.map(({ img, title, description }, index) => (
            <div key={index} className="bg-gray-200 p-6 rounded w-72 text-center">
              <img src={img} alt={title} className="mx-auto" loading="lazy" />
              <h4 className="text-custom-purple text-base mt-4 font-semibold">{title}</h4>
              <p className="text-custom-purple mt-2 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-xl mx-auto bg-white p-6 md:p-12">
          <h3 className="text-custom-purple text-xl md:text-2xl text-center font-medium">
            Join our exclusive club
          </h3>
          <p className="text-custom-purple text-center mt-4 text-sm md:text-base">
            Sign up for exclusive offers on new collections, events, and more.
          </p>
          <div className="flex flex-col md:flex-row items-center mt-6 gap-4">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full md:w-auto flex-grow py-3 px-4 bg-gray-100 rounded border border-gray-300"
            />
            <button className="bg-custom-purple text-white py-3 px-6 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
