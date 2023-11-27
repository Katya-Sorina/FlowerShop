import React, { useState } from "react";

export default function ButtonGroup(props) {
  const { countries, setCountries } = props;
  return (
    <div>
      <button
        style={{ fontWeight: countries.includes("France") ? "700" : "normal" }}
        onClick={() => {
          if (countries.includes("France")) {
            setCountries([...countries.filter((item) => item !== "France")]);
          } else {
            setCountries([...countries, "France"]);
          }
        }}
      >
        France
      </button>
      <button
        style={{
          fontWeight: countries.includes("Nederlands") ? "700" : "normal",
        }}
        onClick={() => {
          if (countries.includes("Nederlands")) {
            setCountries([
              ...countries.filter((item) => {
                if (item === "Nederlands") {
                  return false;
                } else {
                  return item;
                }
              }),
            ]);
          } else {
            setCountries([...countries, "Nederlands"]);
          }
        }}
      >
        Nederlands
      </button>
      <button
        style={{ fontWeight: countries.includes("Italy") ? "700" : "normal" }}
        onClick={() => {
          if (countries.includes("Italy")) {
            setCountries([...countries.filter((item) => item !== "Italy")]);
          } else {
            setCountries([...countries, "Italy"]);
          }
        }}
      >
        Italy
      </button>
    </div>
  );
}
