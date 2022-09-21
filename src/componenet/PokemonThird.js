import React, { useEffect } from "react";
import "../App.css";
import Header from "./header";
import {
  StyleLi,
  StyleUl,
} from "../style_components/style.js";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon} from "../action/action";

const PokemonMain = () => {
  let num = Math.floor(Math.random() * 500);
  useEffect(() => {
    FetchData(num);
  });


  const FetchData = (num) => {
    dispatch(GetPokemon(num));
  };

  const dispatch = useDispatch();

  const pokemonState = useSelector((state) => state.pokemonReducer);

  const TypeArr = [];
  if (pokemonState.data.types) {
    pokemonState.data.types.map((item) => {
      TypeArr.push(item.type);
    });
    console.log(TypeArr, "dev");
    return TypeArr
  }
  
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />

        <StyleUl>
        {TypeArr.map((item, index) => {
          return (
              <StyleLi key={index}> {item.name}</StyleLi>
          );
        })}
        </StyleUl>
    </>
  );
};

export default PokemonMain;
