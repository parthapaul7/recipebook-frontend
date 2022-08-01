import * as React from "react";
import styles from  "./Details.module.css";

const Steps = (props) => {
  return (
    <>
          {props?.steps?.map((step, index) => {
            return (
              <div key={index} className={styles.stepsContainer}>
                <h2>{step.stepNo}</h2>
                <pre>{step.description}</pre>
                <img src={step.image} alt="" />
                <hr />
              </div>
            );
          })}
    </>
  );
};

export default Steps;
