import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import TableHead from "./TableHead";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/PhotoOutlined";

export default function Form({
  onNameChange,
  onDateChange,
  onAddItem,
  onLabourChange,
  onImageChange,
  image,
  n,
  labour,
  date,
}) {
  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);
  const [quantity, setQuantity] = useState(0);

  return (
    <div
      className="container py-3 "
      style={{
        width: "90%",
        boxShadow: "5px 5px 20px 3px #bfbfbf",
        backgroundColor: "#efefef",
        borderRadius: 8,
        minHeight: "84vh",
      }}
    >
      <h3 className="text-center" style={{ letterSpacing: 3 }}>
        BILL
      </h3>
      <div className="my-2 bold ">Name</div>
      <TextField
        type="text"
        inputProps={{ style: { padding: "2px 5px" } }}
        placeholder="Name"
        variant="outlined"
        value={n}
        onChange={(event) => {
          onNameChange(event.target.value);
        }}
      />
      <div className="my-2 bold">Date</div>
      <TextField
        type="date"
        value={date}
        inputProps={{ style: { padding: "2px 5px" } }}
        variant="outlined"
        onChange={(event) => {
          onDateChange(event.target.value);
        }}
      />

      <div className="bold mt-3 mb-1">Items</div>
      <table>
        <TableHead />
        <tr>
          <td className="description">
            <TextField
              type="text"
              fullWidth
              value={name}
              onFocus={(event) => event.target.select()}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </td>
          <td className="rate">
            <TextField
              type="number"
              fullWidth
              value={rate}
              placeholder={0}
              onFocus={(event) => event.target.select()}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              onChange={(event) => {
                setRate(event.target.value);
              }}
            />
          </td>
          <td className="quantity">
            <TextField
              type="number"
              fullWidth
              placeholder={0}
              value={quantity}
              onFocus={(event) => event.target.select()}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
            />
          </td>
          <td className="total">{(rate * quantity).toFixed(2)}</td>
        </tr>
        <tr>
          <Button
            className="my-2"
            onClick={() => {
              onAddItem({ name, rate, quantity });
              setName("");
              setRate(0);
              setQuantity(0);
            }}
            // color="primary"
            variant="outlined"
          >
            Add
          </Button>
        </tr>
      </table>
      <div className="my-2 bold ">Labour</div>
      <TextField
        type="number"
        placeholder="Labour"
        onFocus={(event) => event.target.select()}
        value={labour}
        inputProps={{ style: { padding: "2px 5px" } }}
        variant="outlined"
        onChange={(event) => {
          onLabourChange(event.target.value);
        }}
      />
      <div>
        <input
          style={{ display: "none" }}
          accept="image/*"
          id="contained-button-file"
          type="file"
          onChange={(event) =>
            onImageChange(URL.createObjectURL(event.target.files[0]))
          }
        />
        <label htmlFor="contained-button-file">
          <Button
            className="my-4"
            variant="contained"
            color="primary"
            endIcon={<SaveIcon />}
            component="span"
          >
            {image ? "Change" : "Upload"}
          </Button>
        </label>
        {image && (
          <>
            <IconButton
              className="mx-2"
              style={{ padding: 0 }}
              aria-label="delete"
              onClick={() => {
                onImageChange("");
              }}
            >
              <DeleteIcon fontSize="medium" />
            </IconButton>
            <img src={image} height={100} width={100} className="my-3" />
          </>
        )}
      </div>
    </div>
  );
}
