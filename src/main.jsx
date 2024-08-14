import React from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./pages/Home";
import { Flat } from "./pages/Flat";
import { About } from "./pages/About";
import { Error } from "./pages/Error";

import "./index.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home></Home> */}
    {/* <Flat></Flat> */}
    <About></About>
    {/* <Error></Error> */}
  </React.StrictMode>,
)
