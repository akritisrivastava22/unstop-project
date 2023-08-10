import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MenuProvider from "react-flexible-sliding-menu";
// import Nav from "./Components/nav.jsx";
import SlidingMenu from "./Components/SlidingMenu.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MenuProvider MenuComponent={SlidingMenu}>
    <App />
  </MenuProvider>
);
