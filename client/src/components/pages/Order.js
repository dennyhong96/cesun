import React from "react";

const Orders = ({ match }) => {
  return (
    <div>
      <h1>Order</h1>
      <p>{match.params.id}</p>
    </div>
  );
};

export default Orders;
