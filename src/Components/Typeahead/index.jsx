import React, { useState } from "react";
import cities from "./cities";

export default function Index() {
  const [suggestions, setSuggestions] = useState([]);
  const [search, setSearch] = useState("");

  function checkSuggestions(e) {
    let searchedValue = e.target.value;
    setSearch(searchedValue);
    console.log("value", searchedValue);

    if (searchedValue !== "") {
      const filteredOptions = cities.filter((option) =>
        option.toLowerCase().startsWith(searchedValue.toLowerCase())
      );
      console.log("filter options", filteredOptions);
      setSuggestions(filteredOptions);
    } else {
      setSuggestions([]);
    }
  }

  function selectOption(val) {
    setSearch(val);
    setSuggestions([]);
  }
  return (
    <>
      <input
        type="text"
        placeholder="search any city"
        value={search}
        style={{ width: "50%" }}
        onChange={checkSuggestions}
      />

      <ul style={{ listStyle: "none" }}>
        {suggestions.length !== 0
          ? suggestions.map((option, index) => (
              <li
                key={index}
                onClick={(e) => selectOption(option)}
                style={{ cursor: "pointer" }}
              >
                {option}
              </li>
            ))
          : null}
      </ul>
    </>
  );
}
