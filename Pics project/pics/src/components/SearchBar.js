import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("cars");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit("asdf");
  };

  const handleChange = (event) => {
    setTerm(event.target.value.replace(/[a-z]/, ""));
    // the code above, determines that the input cannot be lowercase letter.
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        Confirm the search: {term}
        <input value={term} onChange={handleChange} name="search bar" />
        {term.length < 3 && " Term must be longer then 3!"}
      </form>
    </div>
  );
}

export default SearchBar;
