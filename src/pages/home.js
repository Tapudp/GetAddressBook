import React from "react";
import { Link } from "react-router-dom";
import Usertable from "../components/Molecule/usertable";

export default function Home(props) {
  return (
    <div className="container my-5">
      <h1>
        Welcome to{" "}
        <span className="text-secondary">
          <Link to="/">GetCraft</Link>
        </span>{" "}
        Address Book
      </h1>
      <Usertable />
    </div>
  );
}
