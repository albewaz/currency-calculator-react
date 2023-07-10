import "./style.css";
import React from "react";

const Amount = () => (
  <div>
    <p>
      <label>
        {" "}
        Kwota w PLN
        <input
          type="number"
          min="0"
          required
          className="form__amount"
          placeholder="$$$$$"
        />
      </label>
    </p>
  </div>
);

export default Amount;
