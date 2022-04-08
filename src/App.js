import "./App.css";
import Switch from "./Switch.js";

import { useState } from "react";
import { useEffect } from "react";

function App() {
  let [imgData, setImgData] = useState([]);

  const getImage = () => {
    /*NASA API https://api.nasa.gov/ */

    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API}`
    )
      .then((response) => {
        if (response.status !== 200) {
          console.log("there is an error");
        }
        console.log("resolved", response);
        return response.json();
      })
      .then((data) => {
        setImgData(data);
        console.log(data.url);
      })
      .catch((err) => {
        console.log("error retrieving data", err);
      });
  };

  useEffect(() => {
    getImage();
  }, []);
  return (
    <div className="App">
      <Switch />
      <img className="image" src={imgData.url} alt="space"></img>
      <h1>{imgData.title}</h1>
      <p className="Description">{imgData.explanation}</p>
    </div>
  );
}

export default App;
