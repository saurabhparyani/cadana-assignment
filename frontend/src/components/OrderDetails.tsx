import React from "react";
import moment from "moment";

const OrderDetails: React.FC<{ orderDetails: any }> = ({ orderDetails }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl mb-4">Order Details</h2>
      <div># of Sushi A bought: {orderDetails.orderData.quantity_sushi_A}</div>
      <div># of Sushi B bought: {orderDetails.orderData.quantity_sushi_B}</div>
      <div>
        Current Time of Ordering:{" "}
        {moment(orderDetails.orderData.time).format("hh:mm A")}
      </div>
      <div>
        Each discount applied:{" "}
        {(orderDetails.orderData.discount * 100).toFixed(2)}%
      </div>
      <div>
        Total discount: {orderDetails.orderData.total_discount.toFixed(2)}£
      </div>
      <div>
        Net amount to pay: {orderDetails.orderData.final_price.toFixed(2)}£
      </div>
    </div>
  );
};

export default OrderDetails;
