import { useEffect, useState } from "react"
import styles from "./search.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = import.meta.env.VITE_FoodRecipe_API_KEY

export default function Search({foodData , setFoodData}){
    const [query, setQuery] = useState("");
    useEffect(()=>{
        async function fetchFood(){
            const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data= await response.json()
            console.log(data);
            setFoodData(data.results)            
            
        }
        fetchFood()
    },[query])
    
    return (
        
        <div className={styles.inputContainer}>
            <span className={styles.icon}>
                    🔍 
                </span>
            <input className={styles.input} type="text" onChange={(e)=>setQuery(e.target.value)} value={query} placeholder="Search for a food recipe"/>
        </div>
    )
}