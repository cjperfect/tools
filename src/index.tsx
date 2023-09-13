import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MainRouter from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <MainRouter>
      <App />
    </MainRouter>
  </Provider>
);
