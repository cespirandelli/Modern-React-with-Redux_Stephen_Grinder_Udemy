function App() {
  //   const handleClick = () => {
  //     console.log("Button was clicked!");
  //   };

  return (
    <div>
      <button
        onClick={function () {
          console.log("Button was clicked!");
        }}
      >
        Add animal!
      </button>
    </div>
  );
}

export default App;
