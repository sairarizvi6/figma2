import React from "react";

const CartPage = () => {
  const products = [
    {
      id: 1,
      name: "Graystone Vase",
      description: "A timeless ceramic vase with a tri-color grey glaze.",
      price: 85,
      quantity: 1,
      img: "/images/Product Image.png",
    },
    {
      id: 2,
      name: "Basic White Vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 85,
      quantity: 1,
      img: "/images/Product Image 2.png",
    },
  ];

  const calculateSubtotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <main className="bg-gray-50 min-h-screen py-8 px-4 sm:px-8 md:px-16">
      <h1 className="text-2xl font-semibold text-custom-purple text-center mb-8">
        Your Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Section */}
        <section className="lg:w-3/5 bg-white shadow p-6 rounded">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-medium text-custom-purple">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                  <p className="text-base font-semibold text-gray-800 mt-2">
                    £{product.price}
                  </p>
                </div>
              </div>
              <p className="text-lg font-medium text-gray-800">Qty: {product.quantity}</p>
            </div>
          ))}
        </section>

        {/* Summary Section */}
        <section className="lg:w-2/5 bg-white shadow p-6 rounded">
          <h2 className="text-lg font-semibold text-custom-purple">Order Summary</h2>
          <div className="mt-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between text-gray-700 text-sm py-2 border-b"
              >
                <span>{product.name}</span>
                <span>£{product.price * product.quantity}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-lg font-semibold text-gray-800 mt-4">
            <span>Subtotal</span>
            <span>£{calculateSubtotal()}</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Taxes and shipping will be calculated at checkout.
          </p>
          <button className="bg-custom-purple text-white py-3 px-6 w-full mt-6 rounded">
            Proceed to Checkout
          </button>
        </section>
      </div>
    </main>
  );
};

export default CartPage;
