import { useEffect, useState } from "react";
import recipes from "../../recipes.json";
import { Recipe } from "../types/Recipe";

interface PageProps {
  recipes: Recipe[];
}

export default function MealPlanner({ recipes }: PageProps) {
  const [meals, setMeals] = useState<Recipe[]>();

  useEffect(() => {
    setMeals(recipes.sort(() => 0.5 - Math.random()).slice(0, 7));
  }, [recipes]);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <>
      <h2>Meal planner</h2>
      {meals &&
        meals.map((meal, index) => (
          <h4 key={index}>
            {days[index]} - {meal.title}
          </h4>
        ))}
    </>
  );
}

export async function getStaticProps() {
  const data = recipes;

  return {
    props: {
      recipes: data,
    },
  };
}
