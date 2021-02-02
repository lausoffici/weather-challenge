import React from "react";
import Home from "./containers/Home/Home";
import GlobalStyles from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => (
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer />
    <Home />
  </React.StrictMode>
);

export default App;
