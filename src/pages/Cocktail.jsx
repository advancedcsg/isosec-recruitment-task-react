import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../App";
import Layout from "../components/layout/Layout";

export default function Cocktail() {
  const { getSetCocktail } = useContext(StoreContext);
  const cocktail = getSetCocktail[0];
  const navigate = useNavigate();

  const getIngredients = (cocktail) => {
    const keys = Object.keys(cocktail);
    const ingredientKeys = keys.filter(
      (key) => key.includes("Ingredient") && cocktail[key]
    );
    let ingredients = [];
    for (const key in cocktail) {
      if (ingredientKeys.includes(key)) ingredients.push(cocktail[key]);
    }
    return ingredients;
  };
  return (
    <Layout>
      <div
        className="cursor-pointer flex shadow w-32 h-10 mb-14 rounded items-center bg-white justify-center"
        onClick={() => {
          navigate(-1);
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} size="1x" className="mr-4" />
        Back
      </div>
      <div className="flex flex-wrap items-center sm:flex-row flex-col">
        <div className="w-full sm:w-1/2">
          <img src={cocktail.strDrinkThumb} alt="" className="w-full h-auto" />
        </div>

        <div className="flex items-start flex-col justify-start px-12 sm:w-1/2 w-full">
          <h1 className="text-2xl font-bold mb-6 text-left mt-6 sm:mt-0">
            {cocktail.strDrink}
          </h1>
          <div>
            <p className="font-semibold text-xl mr-2 whitespace-nowrap underline text-left">
              Ingredients
            </p>
            <p className="text-xl">
              {" "}
              {getIngredients(cocktail).map((ingredient, index) => (
                <span key={ingredient + index}> {ingredient} </span>
              ))}
            </p>
          </div>
          <div className="mt-6">
            <p className="font-semibold text-xl mr-2 whitespace-nowrap underline text-left">
              Instructions
            </p>
            <p className="text-xl text-left">{cocktail.strInstructions}</p>
          </div>
          <div className="mt-6">
            <p className="font-semibold text-xl mr-2 whitespace-nowrap underline text-left">
              Details
            </p>
            <p className="text-xl text-left">
              <span>Is Alcoholic?: </span>
              <span>{cocktail.strAlcoholic}</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
