import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import RecipeDetails from "./components/RecipeDetails";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("715415");
  return (
    <div>
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <RecipeDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
