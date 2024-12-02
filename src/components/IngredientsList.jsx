import Ingredients from "./Ingredients";

export default function IngredientsList({ food, isLoading }) {
  return (
    <div>
      {isLoading
        ? "Loading..."
        : food.extendedIngredients.map((ingredient) => (
            <Ingredients ingredient={ingredient} />
          ))}
    </div>
  );
}
