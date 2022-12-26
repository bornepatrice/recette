import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, CardHeader, Grid } from "@mui/material";

const Search = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/recette")
      .then((response) => {
        setItems(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(function () {});
  }, []);
  if (items.length === 0) return <div>Aucun résultat</div>;
  return (
    <Container
      maxWidth="lg"
      sx={{ backgroundColor: "white", height: "100%", overflowY: "auto" }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {items.map((item) => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              <Card key={nanoid()} sx={{ maxWidth: 345 }}>
                <CardHeader
                  title={`${item.title} pour ${item.nbPersonne} personnes`}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Search;
