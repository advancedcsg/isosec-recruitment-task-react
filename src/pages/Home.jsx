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
  const [filterActive, setFilterActive] = useState(false);
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  const setCocktailSearched = (cocktail) => {
    setTimeout(() => {
      setParam(`s=${cocktail}`);
      setQueryType("search");
    }, 500);
  };

  const setCocktailsAccordingToFilter = (filter, value) => {
    if (filter === "none") {
      setFilterActive(false);
    } else {
      let newCocktails = [...cocktails];
      newCocktails = newCocktails.filter(
        (cocktail) => cocktail[filter] === value
      );
      setFilteredCocktails([...newCocktails]);
      setFilterActive(true);
    }
  };

  useEffect(() => {
    getCocktail(queryType, param).then((res) => {
      if (res?.data?.drinks?.length > 0) setCocktails(res.data.drinks);
      else setCocktails([]);
      console.log(res.data.drinks);
      setFilterActive(false);
    });
  }, [queryType, param]);
  return (
    <Layout>
      <div className="w-full h-full flex flex-col overflow-hidden">
        <div className="w-full flex sm:justify-between sm:flex-row flex-col pb-12">
          <SearchBar setCocktailSearched={setCocktailSearched} />
          <Filter
            setFilter={setCocktailsAccordingToFilter}
            filterActive={filterActive}
          />
        </div>
        <div className="w-full flex-1 flex justify-center sm:justify-between content-start flex-wrap overflow-y-scroll overflow-x-hidden">
          {!filterActive &&
            cocktails.length > 0 &&
            cocktails.map((cocktail) => (
              <CocktailCard
                {...{ cocktail: cocktail, key: cocktail.idDrink }}
              />
            ))}
          {filterActive &&
            filteredCocktails.length > 0 &&
            filteredCocktails.map((cocktail) => (
              <CocktailCard
                {...{
                  cocktail: cocktail,
                  key: cocktail.idDrink,
                }}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
}
