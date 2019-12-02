import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonContainer } from "../Atom/ButtonContainer";
import Item from "../Atom/Item";
import Loadspinner from "../Atom/Loadspinner";
import Search from "../Atom/Search";
import { TableContainer } from "../Atom/TableContainer";
import Modal from "./Modal";

const ROOT_URL = `https://randomuser.me/api/?seed=divyesh`;

function Usertable(props) {
  const [apiData, setApiData] = useState([]);
  const [start, setStart] = useState(1);
  const [selected, setSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [cache, setCache] = React.useState([]);

  useEffect(() => {
    const APIURL = `${ROOT_URL}&results=50&page=${start}`;
    setLoading(true);
    axios
      .get(APIURL)
      .then(fetchedData => {
        setApiData(prevState => [...prevState, ...fetchedData.data.results]);
      })
      .then(() =>
        console.log(`this is api data ${JSON.stringify(apiData, null, 2)}`)
      )
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  useEffect(() => {
    setCache(filterData(apiData, searchString));
  }, [apiData, searchString]);

  const filterData = (dataArray, someString) => {
    return dataArray.filter(
      item => item.name.first.toLowerCase() === someString.toLowerCase()
    );
  };

  const onSearchChange = event => setSearchString(event.target.value);

  return (
    <>
      <Search onSearchChange={onSearchChange} />
      <TableContainer className="tableContainer">
        <table className="table mb-1 myfonts text-left">
          {apiData ? (
            <>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Profile Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Age</th>
                </tr>
              </thead>
              <tbody>
                {(cache.length ? cache : apiData).map((item, index) => (
                  <Item
                    key={index}
                    setSelected={setSelected}
                    setSelectedItem={setSelectedItem}
                    selected={selected}
                    index={index}
                    data={item}
                  />
                ))}
              </tbody>
              {selected && selectedItem && (
                <Modal
                  selected={selected}
                  setSelected={setSelected}
                  selectedItem={selectedItem}
                />
              )}
            </>
          ) : (
            <Loadspinner />
          )}
          {loading ? <Loadspinner /> : null}
        </table>
        {!cache.length && (
          <ButtonContainer
            onClick={() => {
              setStart(start + 1);
            }}
          >
            Load more Contacts
          </ButtonContainer>
        )}
      </TableContainer>
    </>
  );
}

export default Usertable;
