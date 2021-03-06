import { nanoid } from "nanoid";
import React from "react";
import nl2br from "react-nl2br";
import styles from "../css/recette.module.css";

const ListStep = ({ steps }) => {
  return (
    <div className={styles.listStepItem}>
      <fieldset>
        <legend>Etapes</legend>
        {steps.map((item) => {
          return (
            <div key={nanoid()} className={styles.stepContainer}>
              <div className={styles.number}>{item.id}</div>
              <div className={styles.desc}>{nl2br(item.description)}</div>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
};

export default ListStep;
