import React, { useEffect } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Bill from "./Components/Bill";
import { useState } from "react";
import RowsInput from "./Components/RowsInput";
import TableHead from "./Components/TableHead";
import "./App.css";
import Form from "./Components/Form";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [labour, setLabour] = useState(0);
  const [image, setImage] = useState();
  const [showBill, setShowBill] = useState(false);

  useEffect(() => {
    console.log("yuppp");
    return () => {};
  }, [items]);

  function clearAllBillDetail() {
    setItems([]);
    setName("");
    setDate("");
    setLabour(0);
    setImage("");
  }

  function ondelete(ind) {
    let temp = items.filter(function (val, index) {
      return index != ind;
    });
    setItems(temp);
  }

  function onLabourChange(value) {
    setLabour(value);
  }

  function onImageChange(value) {
    setImage(value);
  }

  function onNameChange(value) {
    setName(value);
  }

  function onDateChange(value) {
    setDate(value);
  }

  function onAddItem(obj) {
    setItems([
      ...items,
      { name: obj.name, rate: obj.rate, quantity: obj.quantity },
    ]);
  }

  const getTotal = () => {
    var total = 0;
    items.map(function (x) {
      total = total + x.quantity * x.rate;
    });
    return total + parseInt(labour);
  };

  return (
    <div
      className="container-fluid my-5"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="col-6">
        <Form
          onNameChange={onNameChange}
          onDateChange={onDateChange}
          onAddItem={onAddItem}
          onLabourChange={onLabourChange}
          onImageChange={onImageChange}
          image={image}
          labour={labour}
          n={name}
          date={date}
        />
      </div>

      <div
        className="col-6"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="px-5 scroll"
          style={{
            border: "1px solid black",
            borderRadius: 10,
            boxShadow: "5px 5px 20px 3px #bfbfbf",
            width: "90%",
            height: "85vh",

            overflow: "auto",
            padding: 15,
          }}
        >
          <h3 className="text-center my-3">DETAIL BILL</h3>
          <div className="row mb-3">
            <div className="col-6 row">Name : {name}</div>
            <div
              className="col-6"
              style={{ justifyContent: "flex-end", display: "flex" }}
            >
              Date : {date}
            </div>
          </div>
          <div className="text-center">
            {image && (
              <img
                className="my-3"
                src={image}
                alt="new"
                height={100}
                width={100}
              />
            )}
          </div>
          <table>
            <TableHead />
            {items.map(function (item, i) {
              console.log(item);
              return (
                <tr>
                  <RowsInput index={i} item={item} />

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
              <td className="text-center">{labour}</td>
            </tr>
            <tr>
              <th colSpan={3} className="text-center">
                Total
              </th>
              <th className="total">{getTotal()}</th>
            </tr>
          </table>
          <p
            className="my-5"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => setShowBill(true)}
              color="secondary"
              variant="contained"
            >
              generate
            </Button>
          </p>
        </div>
      </div>
      <Modal open={showBill}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PDFViewer
            className="my-5"
            style={{ width: "80%", height: "30em", margin: "auto" }}
          >
            <Bill
              name={name}
              date={date}
              items={items}
              total={getTotal()}
              labour={labour}
              image={image}
            />
          </PDFViewer>
          <Button
            style={{ width: 100 }}
            variant="contained"
            onClick={() => {
              setShowBill(false);
              clearAllBillDetail();
            }}
          >
            close
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
