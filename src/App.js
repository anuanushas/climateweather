import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Head from "./Head";
import Weacondtion from "./Weacondtion";
function App() {
  const APIkey = "debac29e57b309139e6e1c66b984ee2b";
  const [data, setData] = useState();
  const [city, setCity] = useState("");

  const [guest, setguest] = useState();
  const [but, setbut] = useState("");

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIkey;

  useEffect(() => {
    axios.get(url).then((response) => setData(response.data));
  }, [url]);

  function handler(event) {
    setCity(event.target.value);
  }

  function butname(event) {
    setbut(event.target.value);
  }
  function enter() {
    setguest(but);
  }

  return (
    <>
      {!guest ? (
        <div className="login-names">
          <form>
            <input
              type="text"
              placeholder="Enter your name"
              autoFocus
              value={but}
              onChange={butname}
            />
            <button class="button" onClick={enter}>
              Enter
            </button>
          </form>
        </div>
      ) : (
        <div className="container">
          <div className="left">
            <Head guest={guest} />
            <div className="input">
              <div className="inputsection">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  autoFocus
                  placeholder="Search here..."
                  id=""
                  value={city}
                  onChange={handler}
                />
                <i className="fa-solid fa-location-dot"></i>
              </div>
            </div>
          </div>
          <div className="right">
            <Weacondtion data={data} />
          </div>
        </div>
      )}
    </>
  );
}
export default App;
