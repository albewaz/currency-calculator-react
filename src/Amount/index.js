import React from "react";
import "./style.css";

const Amount = ({ handleInputChange }) => (
  <div>
    <p>
      <label>
        Kwota w PLN:
        <input
          type="number"
          min="0"
          required
          className="form__amount"
          placeholder="$$$$$"
          onChange={handleInputChange}
        />
      </label>
    </p>
  </div>
);

export default Amount;
