import { nanoid } from "nanoid";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../css/recette.module.css";

const ListStep = () => {
  const steps = useSelector((state) => state.steps);
  return (
    <div className={styles.listStepItem}>
      <fieldset>
        <legend>Etapes</legend>
        {steps.map((item) => {
          return (
            <div key={nanoid()} className={styles.stepContainer}>
              <div className={styles.number}>{item.id}</div>
              <div className={styles.desc}>{item.description}</div>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
};

export default ListStep;
