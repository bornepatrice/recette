import React, { useState } from "react";
import styles from "../css/recette.module.css";
import { useDispatch } from "react-redux";
import { ADD_STEP } from "../actions/step";
const AddStep = () => {
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const handleAddStep = function () {
    console.log(desc);
    if (desc.trim() === "") {
      return;
    }
    dispatch({
      type: ADD_STEP,
      payload: desc,
    });
    setDesc("");
  };

  return (
    <div className={`${styles.ingredient} ${styles.step}`}>
      <textarea
        className={styles.addStep}
        onChange={(e) => setDesc(e.currentTarget.value)}
        value={desc}
        placeholder="Etape"
      ></textarea>
      <button className={styles.plus} onClick={handleAddStep}>
        +
      </button>
    </div>
  );
};

export default AddStep;
