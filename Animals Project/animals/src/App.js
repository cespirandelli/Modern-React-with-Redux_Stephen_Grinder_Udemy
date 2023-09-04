import { useState } from "react";

function getRandomAnimal() {
  const animals = ["bird", "cat", "dog", "gator", "cow", "horse"];
  // If we don't add the Math.floor, this will generate a decimal number.
  return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getRandomAnimal());

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add animal!</button>
      <div> Number of animals: {count}</div>
    </div>
  );
}

export default App;
