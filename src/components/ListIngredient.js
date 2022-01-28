import { nanoid } from "nanoid";
import React from "react";
import styles from "../css/recette.module.css";

const ListIngredient = ({ ing }) => {
  return (
    <div className={styles.listIngredientItem}>
      <fieldset>
        <legend>Ingrédients</legend>
        {ing.map((item) => {
          return (
            <div key={nanoid()} className={styles.item}>
              <span>{item.name}:</span>
              <span className={styles.bold}>{item.qty}</span>
              <span>{item.unit}</span>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
};

export default ListIngredient;
