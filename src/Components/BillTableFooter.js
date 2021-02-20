import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontSize: 12,
  },
  description: {
    width: "85%",
    textAlign: "right",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8,
  },
  total: {
    width: "15%",
    textAlign: "right",
    paddingRight: 8,
  },
});

const BillTableFooter = ({ total, labour }) => {
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.description}>Labour</Text>
        <Text style={styles.total}>{labour}</Text>
      </View>
      <View style={styles.row}>
        <Text
          style={[
            styles.description,
            { fontWeight: "ultrabold", fontSize: 14 },
          ]}
        >
          TOTAL
        </Text>
        <Text style={[styles.total, { fontWeight: "ultrabold", fontSize: 14 }]}>
          {total}
        </Text>
      </View>
    </>
  );
};

export default BillTableFooter;
