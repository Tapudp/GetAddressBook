import React from "react";
import Usertable from "../components/Molecule/usertable";

export default function Home(props) {
  return (
    <div className="container my-5">
      <h1>
        Welcome to <span className="text-secondary">GetCraft</span> Address Book
      </h1>
      <Usertable />
    </div>
  );
}
