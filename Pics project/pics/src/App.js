import searchImages from "./api";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    const result = await searchImages(term);
    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
