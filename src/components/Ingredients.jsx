import styles from "./Ingredients.module.css";
export default function Ingredients({ ingredient }) {
  return (
    <div>
      <div className={styles.IngredientsContainer}>
        <div className={styles.ImageContainer}>
          <img
            className={styles.IngredientImage}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` +
              ingredient.image
            }
            alt=""
          />
        </div>
        <div className={styles.NameContainer}>
          <div className={styles.IngredientName}>{ingredient.name}</div>
          <div className={styles.IngredientAmount}>
            {ingredient.amount} {ingredient.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
