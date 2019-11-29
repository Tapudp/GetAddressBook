import React from "react";

function Usertable(props) {
  const { apiData } = props;
  return (
    <div className="card d-flex">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody className={apiData == "" ? "" : ""}>
          {apiData ? (
            apiData.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  {item.name.title}{" "}
                  <b>
                    {item.name.first} {item.name.last}
                  </b>
                </td>
                <td>{item.gender}</td>
                <td>{item.dob.age}</td>
              </tr>
            ))
          ) : (
            <div class="spinner-border text-success" role="status">
              <div class="sr-only">Loading...</div>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Usertable;
