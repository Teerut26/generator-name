// import {useEffect} from 'react'
// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "./Card";

function App() {
  // useEffect(() => {
  //   const script = document.createElement("script")
  //   script.src = 'bootstrap/dist/js/bootstrap.bundle.min.js'
  // }, [])
  return (
    <div classname="app">
      <div className="container mt-5">
        <Card />
      </div>
    </div>
  );
}

export default App;
