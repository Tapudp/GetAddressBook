import React from "react";
import { Link } from "react-router-dom";

export default function Default(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>
            the requested URL{" "}
            <span className="text-danger">{props.location.pathname}</span> is
            not found
          </h3>
          <h4>
            let's go back to our <Link to="/"> home </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
