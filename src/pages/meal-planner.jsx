import recipes from "../../recipes.json";

export default function MealPlanner({ recipes }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const meals = recipes.sort(() => 0.5 - Math.random()).slice(0, 7);
  return (
    <>
      <h2>Meal planner</h2>
      {meals &&
        meals.map((meal, index) => (
          <h4>
            {days[index]} - {meal.title}
          </h4>
        ))}
    </>
  );
}

export async function getStaticProps(context) {
  const data = recipes;

  return {
    props: {
      recipes: data,
    },
  };
}
