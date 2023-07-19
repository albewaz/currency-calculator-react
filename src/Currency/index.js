import React from "react";
import "./style.css";

const Currency = ({ handleCurrencyChange }) => (
  <label>
    NA:
    <select
      className="form__currency"
      defaultValue="EUR"
      onChange={handleCurrencyChange}
    >
      <option>EUR</option>
      <option>USD</option>
    </select>
  </label>
);

export default Currency;
