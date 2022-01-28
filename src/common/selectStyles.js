export const customStyles = function (width) {
  return {
    valueContainer: (provided, state) => {
      return {
        ...provided,
        border: "1px solid lightgrey;",
        backgroundColor: "rgba(253, 233, 224, 0.5)",
        width: width || "auto",
      };
    },
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "rgba(253, 233, 224, 0.5)" : "white",
      color: "black",
    }),
  };
};
