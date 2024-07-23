import React, { useState } from "react";
import OrderDetails from "./OrderDetails";

const Home: React.FC = () => {
  const [sushiA, setSushiA] = useState(0);
  const [sushiB, setSushiB] = useState(0);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const addToCart = async () => {
    try {
      const response = await fetch("http://localhost:5000/add_to_cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quantity_sushi_A: sushiA,
          quantity_sushi_B: sushiB,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const orderData = await response.json();

      const ordersResponse = await fetch("http://localhost:5000/orders");
      if (!ordersResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const ordersData = await ordersResponse.json();

      setOrderDetails({ orderData, ordersData });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center mb-8">Susan's Sushi Shop</h1>
      <div className="flex justify-around mb-8">
        <div className="text-center">
          <div className="text-2xl mb-2">3£</div>
          <div className="mb-2">Sushi A</div>
          <div className="flex items-center justify-center space-x-4">
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => setSushiA(sushiA > 0 ? sushiA - 1 : 0)}
            >
              -
            </button>
            <div className="text-xl">{sushiA}</div>
            <button
              className="bg-green-500 text-white px-2 py-1 rounded"
              onClick={() => setSushiA(sushiA + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-2">4£</div>
          <div className="mb-2">Sushi B</div>
          <div className="flex items-center justify-center space-x-4">
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => setSushiB(sushiB > 0 ? sushiB - 1 : 0)}
            >
              -
            </button>
            <div className="text-xl">{sushiB}</div>
            <button
              className="bg-green-500 text-white px-2 py-1 rounded"
              onClick={() => setSushiB(sushiB + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
      {orderDetails && <OrderDetails orderDetails={orderDetails} />}
    </div>
  );
};

export default Home;
