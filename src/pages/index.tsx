import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import classNames from "classnames";
import { Food } from "../types/Food";
import foods from "../../food.json";

interface PageProps {
  data: Food[];
}

const Index = ({ data }: PageProps) => {
  const [selectedFood, setSelectedFood] = useState<Food>();

  const getSelectedFood = (
    event: React.ChangeEvent<{}>,
    value: Food | null
  ) => {
    if (value) {
      setSelectedFood(value);
    }
  };

  return (
    <div className={"container mx-auto max-w-xl px-4"}>
      <h1 className="text-3xl font-bold py-4 text-center text-green-700">
        FODMAP
      </h1>
      <p className="py-4">
        Tool for checking food and ingredients that are high and low in FODMAPS
      </p>
      <Autocomplete
        id="fodmap-food-autocomplete"
        options={data}
        onChange={getSelectedFood}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} label="Search" variant="outlined" fullWidth />
        )}
      />
      {selectedFood ? (
        <div
          className={classNames("mt-6 p-4", {
            "border-red-300 border bg-red-200": selectedFood.fodmap === "high",
            "border-orange-300 border bg-orange-200":
              selectedFood.fodmap === "medium",
            "border-green-300 border bg-green-200":
              selectedFood.fodmap === "low",
          })}
        >
          <div>
            <h4 className="text-2xl font-bold pb-4">{selectedFood.name}</h4>
            <p>{selectedFood.category}</p>
            {selectedFood.qty ? <p>Quantity: {selectedFood.qty}</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  const data = foods;

  return {
    props: {
      data,
    },
  };
}
