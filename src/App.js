import { useEffect, useState } from "react";
import { getCurrenciesRequest } from "./services/currencies";

function App() {
  // states
  const [selectedCurrency, setSelectedCurrency] = useState("fruit");
  const [currencies, setCurrencies] = useState({});

  const getData = async () => {
    const currencyList = await getCurrenciesRequest();
    console.log("currencyList", currencyList);
    setCurrencies(currencyList.rates);
  };

  const onCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <label>
        Currencies
        <select value={selectedCurrency} onChange={onCurrencyChange}>
          {Object.keys(currencies)?.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </label>
      {/* second select option */}
      <label>
        Currency amont
        <select value={selectedCurrency} onChange={onCurrencyChange}>
          <option key="USD" value="0.997655"></option>
          <option key="CAD" value="1.290417"></option>
        </select>
      </label>
    </div>
  );
}

export default App;
