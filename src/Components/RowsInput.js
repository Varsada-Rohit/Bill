import React from "react";

import "../App.css";

export default function RowsInput({ item }) {
  return (
    <>
      <td className="description">{item.name}</td>
      <td className="rate">{item.rate}</td>
      <td className="quantity">{item.quantity}</td>
      <td className="total">{(item.rate * item.quantity).toFixed(2)}</td>
    </>
  );
}
