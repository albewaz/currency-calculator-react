import { Sum } from "./styled";
import React from "react";

const Result = ({ amount, selectedCurrency }) => {
  const exchangeRate = selectedCurrency === "EUR" ? 4.45 : 4;
  const convertedValue = amount / exchangeRate;

  return <Sum>{convertedValue.toFixed(2)}</Sum>;
};

export default Result;