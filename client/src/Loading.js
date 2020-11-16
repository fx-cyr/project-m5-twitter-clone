import React from "react";
import loader from "../src/assets/loadinggif.gif";

const Loading = () => {
  return (
    <div>
      <img src={loader} width={50}></img>
      <p>Page is loading</p>
    </div>
  );
};

export default Loading;
