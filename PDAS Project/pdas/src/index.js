// Import Libs
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Get a reference to the div with ID Root on document and create root
const el = document.getElementById("root");

// Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// Show content on the screen
root.render(<App />);
