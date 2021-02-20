import React from "react";
import { Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 25,
  },
});

const BillImage = ({ image }) => {
  if (!image) {
    return null;
  }
  return <Image style={styles.logo} src={image} />;
};

export default BillImage;
