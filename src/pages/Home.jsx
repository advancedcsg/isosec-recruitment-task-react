import React, { useEffect, useState } from "react";
import Filter from "../components/filter/Filter";
import Layout from "../components/layout/Layout";
import SearchBar from "../components/search-bar/SearchBar";
import getCocktail from "../utils/api/getCocktail";
import CocktailCard from "../components/cocktail-card/CocktailCard";

export default function Home() {
  const [queryType, setQueryType] = useState("search");
  const [param, setParam] = useState("s=margarita");
  const [cocktails, setCocktails] = useState([]);

  const setCocktailSearched = (cocktail) => {
    setTimeout(() => {
      setParam(`s=${cocktail}`);
      setQueryType("search");
    }, 500);
  };

  useEffect(() => {
    getCocktail(queryType, param).then((res) => {
      setCocktails(res.data.drinks);
      console.log(res.data.drinks);
    });
  }, [queryType, param]);
  return (
    <Layout>
      <div className="w-full h-full flex flex-col overflow-hidden">
        <div className="w-full flex sm:justify-between sm:flex-row flex-col pb-12">
          <SearchBar setCocktailSearched={setCocktailSearched} />
          <Filter />
        </div>
        <div className="w-full flex-1 flex justify-center sm:justify-between flex-wrap overflow-y-scroll overflow-x-hidden">
          {cocktails.length > 0 &&
            cocktails.map((cocktail) => (
              <CocktailCard
                {...{ cocktail: cocktail, key: cocktail.idDrink }}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
}
