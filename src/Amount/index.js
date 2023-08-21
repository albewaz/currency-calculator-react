import React from "react";
import {Value} from "./styled";

const Amount = ({ handleInputChange }) => (
  <div>
    <p>
      <label>
        Kwota w PLN:
        <Value
          type="number"
          min="0"
          required
          placeholder="$$$$$"
          onChange={handleInputChange}
        />
      </label>
    </p>
  </div>
);

export default Amount;
