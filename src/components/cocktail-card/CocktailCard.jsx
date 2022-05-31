import React from "react";
import { useNavigate } from "react-router-dom";

export default function CocktailCard({ cocktail }) {
  const navigate = useNavigate();

  return (
    <div
      className="w-72 overflow-hidden shadow-md rounded bg-white mb-12 sm:mb-18 mx-2 cursor-pointer max-h-96"
      onClick={() => {
        navigate(`/cocktail/${cocktail.strDrink}`);
      }}
    >
      <img
        src={cocktail.strDrinkThumb}
        alt=""
        className="h-44 w-72 object-cover"
      />
      <div className="h-44 px-6  text-left">
        <p className="text-lg my-4 font-bold">{cocktail.strDrink}</p>
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-semibold">Alcoholic: </span>
            {cocktail.strAlcoholic}
          </p>
        </div>
      </div>
    </div>
  );
}
