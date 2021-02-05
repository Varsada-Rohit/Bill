import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import tiles1 from "./iii/24support.png";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { useState } from "react";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

function App() {
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [labour, setLabour] = useState(0);
  const [image, setImage] = useState("");
  const [showBill, setShowBill] = useState(false);

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Ripplebhai</Text>
          <Text>Earing Emerald</Text>

          <Image
            src={image}
            style={{ height: 100, width: 100, objectFit: "cover" }}
          />

          <Text>
            {quantity1 * value1} = {quantity1} * {value1} &#123;2 emerald &#125;
          </Text>
          <Text>
            {quantity2 * value2} = {quantity2} * {value2} &#123;76 dia &#125;
          </Text>
          <Text>
            {quantity3 * value3} = {quantity3} * {value3} &#123;18 kt &#125;
          </Text>
          <Text>{labour} = labout </Text>
          <Text>{getTotal()} = Total</Text>
        </View>
        <View></View>
      </Page>
    </Document>
  );

  const getTotal = () => {
    var total =
      quantity1 * value1 + quantity2 * value2 + quantity3 * value3 + labour * 1;
    return total;
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
        <div className="text-center mb-4">
          <h4>Ripplebhai</h4>
          <h5>Earing Emerald</h5>
        </div>
        {image && (
          <img
            className="my-3"
            src={image}
            alt="new"
            height={100}
            width={100}
          />
        )}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>{quantity1 * value1} = </p>
          <TextField
            id="standard-required"
            type="number"
            defaultValue={0}
            style={{ width: 100, marginLeft: 5, marginRight: 5 }}
            onChange={(event) => setQuantity1(event.target.value)}
          />
          <p>*</p>
          <TextField
            id="standard-required"
            type="number"
            defaultValue={0}
            style={{ width: 100, marginLeft: 5, marginRight: 5 }}
            onChange={(event) => setValue1(event.target.value)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>{quantity2 * value2} = </p>
          <TextField
            id="standard-required"
            type="number"
            defaultValue={0}
            style={{ width: 100, marginLeft: 5, marginRight: 5 }}
            onChange={(event) => setQuantity2(event.target.value)}
          />
          <p>*</p>
          <TextField
            id="standard-required"
            type="number"
            defaultValue={0}
            style={{ width: 100, marginLeft: 5, marginRight: 5 }}
            onChange={(event) => setValue2(event.target.value)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>{quantity3 * value3} = </p>
          <TextField
            id="standard-required"
            type="number"
            defaultValue={0}
            style={{ width: 100, marginLeft: 5, marginRight: 5 }}
            onChange={(event) => setQuantity3(event.target.value)}
          />
          <p>*</p>
          <TextField
            id="standard-required"
            type="number"
            defaultValue={0}
            style={{ width: 100, marginLeft: 5, marginRight: 5 }}
            onChange={(event) => setValue3(event.target.value)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TextField
            id="standard-required"
            type="number"
            defaultValue={0}
            style={{ width: 100, marginLeft: 5, marginRight: 5 }}
            onChange={(event) => setLabour(event.target.value)}
          />
          <p> = labour</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", marginTop: 10 }}>
            {getTotal()} = Total
          </p>
        </div>
        <input
          className="my-2"
          type="file"
          onChange={(event) =>
            setImage(URL.createObjectURL(event.target.files[0]))
          }
        />
        <div className="text-center">
          <Button
            variant="contained"
            style={{ width: 100, marginTop: 50, marginBottom: 10 }}
            color="primary"
            onClick={() => setShowBill(true)}
          >
            Primary
          </Button>
        </div>

        {/* <p className="mx-3">hiii</p> */}

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
              <MyDocument />
            </PDFViewer>
            <Button
              style={{ width: 100 }}
              variant="contained"
              onClick={() => setShowBill(false)}
            >
              close
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default App;
