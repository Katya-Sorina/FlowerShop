import React, { useState } from "react";
import FlowerListItem from "./FlowerListItem";
import ButtonGroup from "./ButtonGroup";

const dataFlowers = [
  {
    id: 1,
    name: "rose",
    country: "Nederlands",
    price: 30000,
  },
  {
    id: 2,
    name: "cactus",
    country: "Nederlands",
    price: 5000,
  },
  {
    id: 3,
    name: "lilies",
    country: "Nederlands",
    price: 3000,
  },
  {
    id: 4,
    name: "tulips",
    country: "France",
    price: 2000,
  },
  {
    id: 5,
    name: "pions",
    country: "Italy",
    price: 3000,
  },
  {
    id: 6,
    name: "camomile",
    country: "Italy",
    price: 3000,
  },
];

export default function FlowerList() {
  const [inputSearchData, setInputSearchData] = useState("");
  const [countries, setCountries] = useState([]);

  return (
    <>
      <ButtonGroup
        countries={countries}
        setCountries={setCountries}
      ></ButtonGroup>
      <input
        value={inputSearchData}
        onChange={(e) => {
          setInputSearchData(e.target.value);
        }}
      />
      <div>
        {/* <FlowerListItem properties = {dataFlowers[5]}></FlowerListItem>
        <FlowerListItem properties = {dataFlowers[4]}></FlowerListItem> */}

        {dataFlowers
          .filter((item) =>
            countries.length > 0 ? countries.includes(item.country) : item
          )

          .filter((flower) => {
            if (
              flower.name
                .toLowerCase()
                .startsWith(inputSearchData.toLowerCase())
            ) {
              return flower;
            }

            if (
              flower.country
                .toLowerCase()
                .startsWith(inputSearchData.toLowerCase())
            ) {
              return flower;
            }
            return false;
          })
          .map((flowers) => {
            return <FlowerListItem properties={flowers}></FlowerListItem>;
          })}
      </div>
    </>
  );
}
