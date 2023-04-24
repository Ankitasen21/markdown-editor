import React from "react";
import "./App.css";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Herosection />
    </React.Fragment>
  );
}

export default App;
