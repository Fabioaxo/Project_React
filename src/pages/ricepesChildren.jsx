import React from "react";
import Navbar from "../components/navbar";
import { data, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const APP_KEY = '638e795d57dd48c3b57c167ea1c33f0c'
const RecipesChildren = () => {
    const { RecipesID } = useParams();
    console.log(RecipesID);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipe();
      },[RecipesID]);

    const getRecipe = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${RecipesID}/information?includeNutrition=false&apiKey=${APP_KEY}`);
        const data = await response.json();
        console.log(data);
        setRecipes(data);
      }
    

    
    
    

    return (
        <>
        <Navbar />
         <div className="bg-gray-100 w-full mt-28  flex flex-row text-black min-h-screen justify-center">
          <div className="flex flex-row bg-gray-100 mr-6 justify-center  items-center">
              <img className="w-24 h-24 ml-6 rounded-full shadow-xl hover:scale-110 transition-transform duration-200" src={recipes.image} alt=""/>
          </div>
          <div className="flex flex-col justify-center">
              <p className="text-gray-800 text-2xl font-serif leading-relaxed mt-50">{recipes.title}</p>
              <p> ⏲️ Ready In {recipes.readyInMinutes} minutes </p>
              <p> 🦾 Health Score : {recipes.healthScore}</p>
              <p> 🍴 Gluten Free : {recipes.glutenFree && "✅" || "❌"}</p>
              <p> 🌱 Vegetarian :{recipes.vegetarian && "✅" || "❌"}</p>
              <a href ={recipes.spoonacularSourceUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-lg">🔗 Link to the original recipe</a>
              <Link className="" to={`/recipes`}> <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mt-5">Back to recipes</button></Link>
              
              


          </div>
            

          </div>
          <Footer/>
        </>
    );
    
};

export default RecipesChildren;
