import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "@styles/global-styles";
import { store } from "@store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./containers/FC/app-container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles />
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </>
);
