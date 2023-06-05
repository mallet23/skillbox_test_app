import React from "react";

import { Body, Header } from "./components";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default App;
