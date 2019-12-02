import React from "react";

function Search(props) {
  const { apiData, setSearching } = props;

  const findPerson = event => {
    console.log(`this was searched ${event.target.value}`);
    const divyesh = apiData.filter(
      person => event.target.value === person.name.first
    );
    console.log(divyesh);
  };

  return (
    <>
      <input
        style={{ padding: "0.1rem 1rem", margin: "1rem 0" }}
        placeholder="search first name . . . "
        onChange={findPerson}
        onFocus={() => setSearching(true)}
        onBlur={() => setSearching(false)}
      />
    </>
  );
}

export default Search;
