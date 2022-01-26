import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import IsbnService from "../services/IsbnService";

const Search = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let query = IsbnService.search("dans la tete de sherlock");
    query.then((data) => setItems(data.data.items));
  }, []);
  if (items.length === 0) return <div>Aucun résultat</div>;
  return (
    <div>
      Hello
      {items.map((item) => {
        return <div key={nanoid()}>{item.volumeInfo.title}</div>;
      })}
    </div>
  );
};

export default Search;
