import React, { useState } from "react";
import {
  TextField,
  Container,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import useSWR from "swr";
import classNames from "classnames";

const useStyles = makeStyles({
  root: {
    marginTop: "25px",
  },
  card: {
    marginTop: "25px",
  },
  low: {
    backgroundColor: "rgb(237, 247, 237)",
    border: "1px solid rgb(30, 70, 32)",
  },
  high: {
    backgroundColor: "rgb(253, 236, 234)",
    border: "1px solid rgb(97, 26, 21)",
  },
});

const Index = () => {
  const fetcher = (url) => {
    return fetch(url).then((r) => r.json());
  };
  const { data } = useSWR("/api/food", fetcher);
  const classes = useStyles();
  const [selectedFood, setSelectedFood] = useState();

  const getSelectedFood = (event, value) => {
    if (value) {
      setSelectedFood(value);
    }
  };

  return (
    <Container className={classes.root} maxWidth="sm">
      <Autocomplete
        id="fodmap-food-autocomplete"
        options={data}
        onChange={getSelectedFood}
        disableOpenOnFocus
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} label="Search" variant="outlined" fullWidth />
        )}
      />
      {selectedFood ? (
        <Card
          className={classNames(
            classes.card,
            selectedFood.fodmap === "high" ? classes.high : classes.low
          )}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {selectedFood.name}
            </Typography>
            <Typography>{selectedFood.category}</Typography>
            {selectedFood.qty ? (
              <Typography>Quantity: {selectedFood.qty}</Typography>
            ) : null}
          </CardContent>
        </Card>
      ) : null}
    </Container>
  );
};

export default Index;
