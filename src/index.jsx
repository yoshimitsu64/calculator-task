import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import { GlobalStyles } from "@styles/globalStyles"
import { store } from "@store"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <GlobalStyles />
            <App />
        </Provider>
    </BrowserRouter>,
)
