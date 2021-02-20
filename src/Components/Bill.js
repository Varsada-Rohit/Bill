import React from "react";
import { Page, Document, Image, StyleSheet } from "@react-pdf/renderer";
import BillHead from "./BillHead";
import BillName from "./BillName";
import BillTable from "./BillTable";
import BillImage from "./BillImage";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Bill = ({ name, date, items, total, labour, image }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <BillHead title="Detail BILL" />
      <BillName name={name} date={date} />
      <BillImage image={image} />
      <BillTable items={items} total={total} labour={labour} />
    </Page>
  </Document>
);

export default Bill;
