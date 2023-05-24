import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MainRouter from "./router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <MainRouter>
    <App />
  </MainRouter>
);
