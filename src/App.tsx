import React from "react";
import Location from "./containers/Location/Location";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => (
  <>
    <ToastContainer />
    <Location />
  </>
);

export default App;
