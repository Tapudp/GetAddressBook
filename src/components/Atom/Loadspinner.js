import React from "react";

function Loadspinner() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="spinner-border text-success" role="status">
        <div className="sr-only">Loading...</div>
      </div>
    </div>
  );
}

export default Loadspinner;
