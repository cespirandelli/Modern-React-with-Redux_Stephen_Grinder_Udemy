// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root on public > index.html
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  const name = "Samantha";
  const age = 23;

  return (
    <h1>
      Hi! My name is {name} and my age is {age}
    </h1>
  );
}

// 5) Show the content on the screen
root.render(<App />);
