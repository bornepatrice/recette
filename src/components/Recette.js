import React, { useState } from "react";
import AddIngredient from "./AddIngredient";
import ListIngredient from "./ListIngredient";
import styles from "../css/recette.module.css";
import AddStep from "./AddStep";
import ListStep from "./ListeStep";
import Select from "react-select";

const Recette = () => {
  const [title, setTitle] = useState("");
  const [nb, setNb] = useState({ value: "4", label: "4" });
  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.headerRecette}>
        <input
          type="text"
          value={title}
          className={styles.title}
          placeholder="Nom de la recette"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={styles.headerContainer}>
          <span className={styles.sentence}>Pour</span>
          <span>
            <Select options={options} value={nb} onChange={(e) => setNb(e)} />
          </span>
          <span className={styles.sentence}>personnes</span>
        </div>
      </div>
      <div className={styles.inputIngredient}>
        <AddIngredient />
        <AddStep />
      </div>
      <div className={styles.listIngredient}>
        <ListIngredient />
        <ListStep />
      </div>
    </div>
  );
};

export default Recette;
