import { useEffect, useState } from "react";
import shuffle from "just-shuffle";
import recipes from "../../recipes.json";
import { Recipe } from "../types/Recipe";

interface PageProps {
  recipes: Recipe[];
}

export default function MealPlanner({ recipes }: PageProps) {
  const [meals, setMeals] = useState<Recipe[]>();

  useEffect(() => {
    setMeals(shuffle(recipes).slice(0, 7));
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
      <h2 className="text-3xl font-bold py-4">Meal planner</h2>
      {meals &&
        meals.map((meal, index) => (
          <h4 key={index}>
            <span className="font-bold">{days[index]}</span> - {meal.title}
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
