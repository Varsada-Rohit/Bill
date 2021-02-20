import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  Container: {
    marginTop: 36,
    flexDirection: "row",
    marginBottom: 30,
  },
  name: {
    flex: 1,
  },
  date: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

const InvoiceNo = ({ name, date }) => (
  <Fragment>
    <View style={styles.Container}>
      <View style={styles.name}>
        <Text>Name : {name}</Text>
      </View>

      <View style={styles.date}>
        <Text>Date : </Text>
        <Text>{date}</Text>
      </View>
    </View>
  </Fragment>
);

export default InvoiceNo;
