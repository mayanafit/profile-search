import React from "react";
import "./searchBox.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="search-container">
      <input
        className="input"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
