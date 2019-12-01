import axios from "axios";
import React, { useEffect, useState } from "react";
import Usertable from "../components/usertable";

const ROOT_URL = `https://randomuser.me/api/?seed=divyesh&results=50`;

export default function Home(props) {
  const [apiData, setApiData] = useState("");

  useEffect(() => {
    const APIURL = `${ROOT_URL}&page=1`;
    axios.get(APIURL).then(fetchedData => {
      console.log(fetchedData);
      setApiData(fetchedData.data.results);
    });
  }, []);

  return (
    <div className="container my-5">
      <h1>
        {" "}
        Welcome to <span className="text-secondary">GetCraft</span> Address Book{" "}
      </h1>
      <Usertable apiData={apiData} />
    </div>
  );
}
