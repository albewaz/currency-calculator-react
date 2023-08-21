import React from "react";
import {Cash} from "./styled";

const Currency = ({ handleCurrencyChange }) => (
  <label>
    NA:
    <Cash
      defaultValue="EUR"
      onChange={handleCurrencyChange}
    >
      <option>EUR</option>
      <option>USD</option>
    </Cash>
  </label>
);

export default Currency;
