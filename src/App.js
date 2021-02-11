import React, { useEffect } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import tiles1 from "./iii/24support.png";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { useState } from "react";
import RowsInput from "./Components/RowsInput";
import TableHead from "./Components/TableHead";
import "./App.css";

function App() {
  const [items, setItems] = useState([{ name: "Rohit", rate: 0, quantity: 0 }]);
  const [itemNo, setItemNo] = useState(1);
  const [labour, setLabour] = useState(0);

  useEffect(() => {
    console.log("yuppp");
    return () => {};
  }, [items]);

  function ondelete(ind) {
    let temp = items.filter(function (val, index, arr) {
      return index != ind;
    });
    setItems(temp);
    console.log(items);
  }

  const getTotal = () => {
    var total = 0;
    items.map(function (x, i) {
      total = total + x.quantity * x.rate;
    });
    return total + labour;
  };

  return (
    <div
      className="container my-5"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div
        className="px-5"
        style={{
          border: "1px solid black",
          borderRadius: 10,
          boxShadow: "5px 5px 20px 3px #bfbfbf",
          width: "fit-content",
          padding: 15,
        }}
      >
        <h3 className="text-center my-3">DETAIL BILL</h3>
        <div className="row mb-3">
          <div className="col-6 row">
            <div className="col-3">Name :</div>
            <TextField type="text" className="col-9" />
          </div>
          <div
            className="col-6"
            style={{ justifyContent: "flex-end", display: "flex" }}
          >
            <TextField type="date" />
          </div>
        </div>
        <table>
          <TableHead />
          {items.map(function (item, i) {
            return (
              <tr>
                <RowsInput
                  items={items}
                  setItems={setItems}
                  index={i}
                  qa={item.quantity}
                  ra={item.rate}
                  na={item.name}
                  ondelete={ondelete}
                />
                {/* <p>{item.name}</p> */}
                <td style={{ border: 0 }}>
                  <IconButton
                    style={{ padding: 0 }}
                    aria-label="delete"
                    onClick={() => {
                      ondelete(i);
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={3} className="labour text-center">
              Labour
            </td>
            <td>
              <TextField
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                placeholder={0}
                type="number"
                fullWidth
                onChange={(event) => setLabour(parseInt(event.target.value))}
              />
            </td>
          </tr>
          <tr>
            <th colSpan={3} className="text-center">
              Total
            </th>
            <th className="total">{getTotal()}</th>
          </tr>
        </table>
        <Button
          className="my-3"
          onClick={() =>
            setItems([...items, { name: "", rate: 0, quantity: 0 }])
          }
          color="primary"
          variant="contained"
        >
          Add Item
        </Button>
        <tr
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => console.log(items)}
            color="secondary"
            variant="contained"
          >
            generate
          </Button>
        </tr>
      </div>
    </div>
  );
}

export default App;
