import React, { useState } from "react";
import Item from "../Atom/Item";
import Modal from "./Modal";

function Usertable(props) {
  const { apiData } = props;
  const [selected, setSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="tableContainer">
      <table className="table myfonts">
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
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-success" role="status">
              <div className="sr-only">Loading...</div>
            </div>
          </div>
        )}
      </table>
    </div>
  );
}

export default Usertable;
