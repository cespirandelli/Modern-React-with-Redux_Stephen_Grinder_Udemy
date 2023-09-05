import { useState } from "react";

function getRandomAnimal() {
  const animals = ["bird", "cat", "dog", "gator", "cow", "horse"];
  // If we don't add the Math.floor, this will generate a decimal number.
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {};

  return (
    <div>
      <button onClick={handleClick}>Add animal!</button>
    </div>
  );
}

export default App;
