import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "@styles/globalStyles";
import App from "@components/app";
import { store } from "@store";
import { Toaster } from "yoshimitsu-toast-library";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyles />
      <Toaster/>
      <App />
    </Provider>
  </BrowserRouter>,
);
