import React, { useState } from "react";
import Amount from "./Amount";
import Currency from "./Currency";
import Result from "./Result";

function App() {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setAmount(value);
  };

  const handleCurrencyChange = (event) => {
    const currency = event.target.value;
    setSelectedCurrency(currency);
  };

  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator Walut</legend>
        <Amount handleInputChange={handleInputChange} />
        <div>
          <Currency handleCurrencyChange={handleCurrencyChange} />
          <Result amount={amount} selectedCurrency={selectedCurrency} />
        </div>
      </fieldset>
    </form>
  );
}

export default App;
