import React from "react";

function Loadspinner() {
  return (
    <div className="text-center">
      <div
        className="float-center text-center spinner-border text-success"
        role="status"
      >
        <div className="sr-only float-center">Loading...</div>
      </div>
    </div>
  );
}

export default Loadspinner;
