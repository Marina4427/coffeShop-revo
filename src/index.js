import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Context } from "./utils/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);