import Form from "./Form";
import Amount from "./Amount";
import Currency from "./Currency";
import Result from "./Result";

function App() {
  return (
    <form className="form js-form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator Walut</legend>
        <Amount />
        <div>
          <Currency />
          <Result />
        </div>
      </fieldset>
    </form>
  );
}

export default App;

