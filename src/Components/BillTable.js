import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import BillTableHeader from "./BillTableHeader";
import BillTableBody from "./BillTableBody";
import BillTableFooter from "./BillTableFooter";

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 1,
    borderColor: "#bff0fd",
  },
});

const BillTable = ({ items, total, labour }) => (
  <View style={styles.tableContainer}>
    <BillTableHeader />
    <BillTableBody items={items} />
    <BillTableFooter total={total} labour={labour} />
  </View>
);

export default BillTable;
