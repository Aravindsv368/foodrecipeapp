import { useEffect, useState } from "react";
import styles from "./RecipeDetails.module.css";
// import Ingredients from "./Ingredients";
import IngredientsList from "./IngredientsList";
export default function RecipeDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_FoodRecipe_API_KEY;
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h2 className={styles.recipeTitle}>{food.title}</h2>
        <img className={styles.recipeImg} src={food.image} />
        <div className={styles.recipeDetails}>
          <strong>⏰ {food.readyInMinutes} minutes</strong>
          <span>
            <strong>
              {food.vegetarian ? "🟢Vegetarian" : "🔴Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>👪 Servings: {food.servings}</strong>
          </span>
          <span>
            <strong>
              ${Math.floor(food.pricePerServing / 100)} per serving
            </strong>
          </span>
          <div>
            <strong>Health-score {food.healthScore}</strong>
          </div>
        </div>
        <div>
          <h2>Ingredients</h2>
          <IngredientsList food={food} isLoading={isLoading} />
        </div>
        <div className={styles.recipeInstructions}>
          <h1>Instructions</h1>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
