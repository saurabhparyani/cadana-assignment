import React, { useEffect, useState } from "react";

const SusanInterface: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch("http://localhost:5000/orders");
      const data = await response.json();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center mb-8">Orders</h1>
      {orders.map((order, index) => (
        <div key={index} className="border p-4 mb-4 rounded shadow-md">
          <div># of Sushi A bought: {order.amount_of_A_bought}</div>
          <div># of Sushi B bought: {order.amount_of_B_bought}</div>
          <div>
            Current Time of Ordering:{" "}
            {new Date(order.time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div>Each discount applied: {order.discount * 100}%</div>
          <div>
            Total discount:{" "}
            {(
              order.discount *
              (order.amount_of_A_bought * 3 + order.amount_of_B_bought * 4)
            ).toFixed(2)}
            £
          </div>
          <div>
            Net amount to pay:{" "}
            {(
              order.amount_of_A_bought * 3 +
              order.amount_of_B_bought * 4 -
              order.discount *
                (order.amount_of_A_bought * 3 + order.amount_of_B_bought * 4)
            ).toFixed(2)}
            £
          </div>
        </div>
      ))}
    </div>
  );
};

export default SusanInterface;
