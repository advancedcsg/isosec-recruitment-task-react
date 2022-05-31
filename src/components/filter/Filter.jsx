import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Filter({ setFilter, filterActive }) {
  const [active, setActive] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("Filter By Type");
  const options = [
    {
      name: "Alcoholic",
      filter: "strAlcoholic",
      value: "Alcoholic",
    },
    {
      name: "Non Alcoholic",
      filter: "strAlcoholic",
      value: "Non alcoholic",
    },
    {
      name: "Cocktail",
      filter: "strCategory",
      value: "Cocktail",
    },
    {
      name: "Ordinary Drink",
      filter: "strCategory",
      value: "Ordinary Drink",
    },
    {
      name: "None",
      filter: "none",
      value: "none",
    },
  ];

  return (
    <div className="relative">
      <div className="flex items-center w-56 justify-between h-14 pl-8 rounded shadow-md mb-1 font-semibold bg-white mb-10 md:mr-2">
        {filterActive ? currentFilter : "Filter By Type"}
        <FontAwesomeIcon
          icon={faChevronDown}
          className="mr-4 cursor-pointer"
          size="1x"
          onClick={() => {
            setActive(!active);
          }}
        />
      </div>
      {active && (
        <div className="w-56 justify-between  rounded shadow-md text-left font-semibold pl-8 space-y-4 py-4 absolute bg-white top-14 mt-1">
          {options.map((option) => (
            <p
              className="cursor-pointer"
              onClick={() => {
                setFilter(option.filter, option.value);
                setActive(!active);
                setCurrentFilter(option.name);
              }}
              key={option.name}
            >
              {option.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
