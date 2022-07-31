import * as React from "react";

const Steps = (props) => {
  return (
    <>
          {props?.steps?.map((step, index) => {
            return (
              <div key={index}>
                <h2>{step.stepNo}</h2>
                <p>{step.description}</p>
                <img src={step.image} alt="" />
                <hr />
              </div>
            );
          })}
    </>
  );
};

export default Steps;
