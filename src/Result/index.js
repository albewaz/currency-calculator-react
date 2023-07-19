import "./style.css";
import React from "react";

const Result = ({ amount, selectedCurrency }) => {
  const exchangeRate = selectedCurrency === "EUR" ? 0.85 : 1.18;
  const convertedValue = amount * exchangeRate;

  return <span className="form__result">{convertedValue.toFixed(2)}</span>;
};

export default Result;