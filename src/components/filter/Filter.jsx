import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Filter({ setFilter }) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center w-56 justify-between h-14 pl-8 rounded shadow-md mb-1 font-semibold bg-white mb-10 md:mr-2">
        Filter by Type
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
          <p
            className="cursor-pointer"
            onClick={() => {
              setFilter("a=Alcoholic");
              setActive(!active);
            }}
          >
            Alcoholic
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              setFilter("a=Non_Alcoholic");
              setActive(!active);
            }}
          >
            Non-Alcoholic
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              setFilter("c=Ordinary_Drink");
              setActive(!active);
            }}
          >
            Ordinary Drink
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              setFilter("c=Cocktail");
              setActive(!active);
            }}
          >
            Cocktail
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              setFilter("g=Cocktail_glass");
              setActive(!active);
            }}
          >
            Cocktail Glass
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              setFilter("g=Champagne_flute");
              setActive(!active);
            }}
          >
            Champagne Flute
          </p>
        </div>
      )}
    </div>
  );
}
