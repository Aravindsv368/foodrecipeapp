import styles from "./recipeContainer.module.css"
export default function FoodItem({food , setFoodId}){
    return (
        <div className={styles.recipeContainer}>
            <img className={styles.itemImg} src={food.image}/>
            <div>
                <span className={styles.recipeContent}>{food.title}</span>
            </div> 
            <button onClick={()=>{
                console.log(food.id);
                setFoodId(food.id)
                
                
            }} className={styles.recipeSearchBtn}>View Recipe</button>

        </div>
    )
}