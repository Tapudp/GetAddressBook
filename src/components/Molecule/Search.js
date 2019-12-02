import React from "react";

function Search(props) {
  const { onSearchChange } = props;

  return (
    <>
      <input
        style={{ padding: "0.1rem 1rem", margin: "1rem 0" }}
        placeholder="search first name . . . "
        onChange={onSearchChange}
      />
    </>
  );
}

export default Search;
