import React from "react";
import "../App.css";

export default function RowsInput() {
  return (
    <tr>
      <th className="description text-center">Description</th>
      <th className="rate">Rate</th>
      <th className="quantity">quantity</th>
      <th className="total">Total</th>
    </tr>
  );
}
