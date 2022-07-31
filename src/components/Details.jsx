import * as React from "react";

import "./Details.css";

const Details = (props) => {
  return (
    <>
          <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt="" />
          </div>
    </>
  );
};

export default Details;
