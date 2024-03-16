import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
const quertClient = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={quertClient}>
      <BrowserRouter>
        <App />
        <ToastContainer position="top-right" autoClose={2000}/>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
reportWebVitals();
