import React from "react";

const Watches = () => {
  const watchData = [
    {
      id: 1,
      name: "Rolex",
      price: 12000,
      description: "Luxury Watch",
      image: "/w4.png",
    },
    {
      id: 2,
      name: "Rolex",
      price: 12000,
      description: "Luxury Watch",
      image: "/w4.png",
    },
    {
      id: 3,
      name: "Rolex",
      price: 12000,
      description: "Luxury Watch",
      image: "/w4.png",
    },
    {
      id: 4,
      name: "Rolex",
      price: 12000,
      description: "Luxury Watch",
      image: "/w4.png",
    },
    {
      id: 5,
      name: "Rolex",
      price: 12000,
      description: "Luxury Watch",
      image: "/w4.png",
    },
    {
      id: 6,
      name: "Rolex",
      price: 12000,
      description: "Luxury Watch",
      image: "/w4.png",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 mt-10 mx-12">
      {watchData.map((watch) => (
        <div key={watch.id} className="watch-card p-4 border rounded-lg text-center">
          <img src={watch.image} alt={watch.name} className="mb-4 w-full object-cover h-48" />
          <h3 className="text-xl font-bold">{watch.name}</h3>
          <p>{watch.description}</p>
          <div className="text-lg font-semibold">${watch.price}</div>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Watches;
