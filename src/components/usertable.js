import React, { useState } from "react";
import Modal from "./Modal";

function Usertable(props) {
  const { apiData } = props;
  const [selected, setSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="card py-5">
      <table className="table">
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
                <tr
                  key={index}
                  onClick={() => {
                    setSelected(!selected);
                    setSelectedItem({ item });
                    console.log(
                      `selectedItem is here ${JSON.stringify(selectedItem)}`
                    );
                  }}
                >
                  <td>{index + 1}</td>
                  <td>
                    {item.name.title}
                    <b>
                      {item.name.first} {item.name.last}
                    </b>
                  </td>
                  <td>{item.gender}</td>
                  <td>{item.dob.age}</td>
                </tr>
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
            <div
              scope="row"
              className="spinner-border text-success"
              role="status"
            >
              <div className="sr-only">Loading...</div>
            </div>
          </div>
        )}
      </table>
    </div>
  );
}

export default Usertable;
