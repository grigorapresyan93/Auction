import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import "./assets/styles/fonts.css";
import { AuthContextProvider } from "./context/auth-context";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
