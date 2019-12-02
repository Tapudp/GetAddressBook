import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonContainer } from "../Atom/ButtonContainer";
import Item from "../Atom/Item";
import Loadspinner from "../Atom/Loadspinner";
import { TableContainer } from "../Atom/TableContainer";
import Modal from "./Modal";
import Search from "./Search";

const ROOT_URL = `https://randomuser.me/api/?seed=divyesh`;

function Usertable(props) {
  const [apiData, setApiData] = useState("");
  const [start, setStart] = useState(1);
  const [selected, setSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(null);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const APIURL = `${ROOT_URL}&results=50&page=${start}`;
    setLoading(true);
    axios
      .get(APIURL)
      .then(fetchedData => {
        setApiData([...apiData, ...fetchedData.data.results]);
      })
      .then(() =>
        console.log(`this is api data ${JSON.stringify(apiData, null, 2)}`)
      )
      .finally(() => setLoading(false));
  }, [start]);

  return (
    <>
      <Search apiData={apiData} setSearching={setSearching} />
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
                {searching === false ? (
                  apiData.map((item, index) => (
                    <Item
                      key={index}
                      setSelected={setSelected}
                      setSelectedItem={setSelectedItem}
                      selected={selected}
                      index={index}
                      data={item}
                    />
                  ))
                ) : (
                  <div>here you will see the results</div>
                )}
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
        <ButtonContainer
          style={{ zIndex: -1 }}
          onClick={() => {
            setStart(start + 1);
          }}
        >
          Load more Contacts
        </ButtonContainer>
      </TableContainer>
    </>
  );
}

export default Usertable;
