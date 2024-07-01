import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CountryContextProvider } from "./context/CountryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CountryContextProvider>
      <App />
    </CountryContextProvider>
  </BrowserRouter>
);
