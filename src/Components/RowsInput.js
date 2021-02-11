import { TextField } from "@material-ui/core";
import React, { useState } from "react";

import "../App.css";

export default function RowsInput({
  items,
  setItems,
  index,
  ondelete,
  qa,
  na,
  ra,
}) {
  const [q, setQ] = useState(qa);
  const [r, setR] = useState(items[index].rate);

  return (
    <>
      <td className="description">
        <TextField
          type="text"
          fullWidth
          defaultValue={na}
          onChange={(event) => {
            let temp = items;
            temp[index].name = event.target.value;
            setItems(temp);
          }}
        />
      </td>
      <td className="rate">
        <TextField
          type="number"
          fullWidth
          placeholder={0}
          defaultValue={items[index].rate}
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          onChange={(event) => {
            let temp = items;
            temp[index].rate = parseInt(event.target.value);
            setItems(temp);
            setR(parseInt(event.target.value));
          }}
        />
      </td>
      <td className="quantity">
        <TextField
          type="number"
          fullWidth
          placeholder={0}
          defaultValue={q}
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          onChange={(event) => {
            let temp = items;
            temp[index].quantity = parseInt(event.target.value);
            setItems(temp);
            setQ(parseInt(event.target.value));
          }}
        />
      </td>
      <td className="total">{r * q}</td>
    </>
  );
}
