import React from "react";
import Home from "./containers/Home/Home";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => (
  <>
    <ToastContainer />
    <Home />
  </>
);

export default App;
