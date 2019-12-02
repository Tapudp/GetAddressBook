import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../Atom/Item";
import Loadspinner from "../Atom/Loadspinner";
import Modal from "./Modal";

const ROOT_URL = `https://randomuser.me/api/?seed=divyesh`;

function Usertable(props) {
  const [apiData, setApiData] = useState("");
  const [start, setStart] = useState(1);
  const [selected, setSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function fetchMoreContent() {
    setStart(start + 1);
    console.log("fetchMoreContent has been called with value ", start);
  }

  useEffect(() => {
    const APIURL = `${ROOT_URL}&results=50&page=${start}`;
    axios.get(APIURL).then(fetchedData => {
      console.log(fetchedData);
      setApiData(fetchedData.data.results);
    });
  }, []);

  return (
    <div className="tableContainer">
      {/* <InfiniteScroll
        dataLength={apiData.length}
        next={fetchMoreContent}
        hasMore={true}
        loader={<Loadspinner />}
      > */}
      <table className="table myfonts mh-50">
        {apiData ? (
          <>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item, index) => (
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
      </table>
      {/* </InfiniteScroll> */}
    </div>
  );
}

export default Usertable;
