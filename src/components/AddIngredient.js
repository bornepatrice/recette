import React, { useState } from "react";
import Select from "react-select";
import styles from "../css/recette.module.css";
import { useDispatch } from "react-redux";
import { ADD_ING } from "../actions/ingredient";
import { customStyles } from "../common/selectStyles";
const AddIngredient = () => {
  const options = [
    { value: "Kg", label: "Kg" },
    { value: "gramme", label: "gramme" },
    { value: "litre", label: "litre" },
    { value: "pièce", label: "pièce" },
    { value: "cuiller à soupe", label: "cuillère à soupe" },
    { value: "cuiller à café", label: "cuillère à café" },
  ];
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [unit, setUnit] = useState(options[1]);
  const handleAddIng = function () {
    if (!qty || !name) {
      return;
    }
    console.log(qty, name, unit);
    dispatch({
      type: ADD_ING,
      payload: { name: name, qty: qty, unit: unit.value },
    });
    setQty("");
    setName("");
  };
  return (
    <div className={styles.ingredient}>
      <input
        type="text"
        placeholder="Ingrédient"
        onChange={(e) => setName(e.currentTarget.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Quantité"
        onChange={(e) => setQty(e.currentTarget.value)}
        value={qty}
      />
      <span>
        <Select
          options={options}
          value={unit}
          onChange={(e) => setUnit(e)}
          styles={customStyles("136px")}
        />
      </span>
      <button className={styles.plus} onClick={handleAddIng}>
        +
      </button>
    </div>
  );
};

export default AddIngredient;
