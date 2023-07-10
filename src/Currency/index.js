import "./style.css";
import React from "react";

const Currency = () => (
  <label>
    NA:
    <select className="form__currency" defaultValue="EUR">
      <option>EUR</option>
      <option>USD</option>
    </select>
  </label>
);

export default Currency;
