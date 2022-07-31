import React,{useEffect} from "react";

import "./Details.css";

const Details = (props) => {
  let time = new Date()
  useEffect(() => {
    time = new Date(props.createdAt);
    console.log(time)
  }, [props])
  
  return (
    <>
          <div>
            <h5>By {props?.author?.name}</h5>
            <h5>Data: {time.toLocaleDateString()}</h5>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt="" />
          </div>
    </>
  );
};

export default Details;
