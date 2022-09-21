import React, { useEffect } from "react";
import "../App.css";
import Header from "./header";
import {
  MainDiv,
  ParentDiv,
  StyleP,
  StyledA,
  Styleimg,
  ChildDiv,
} from "../style_components/style";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon} from "../action/action";

const PokemonMain = (props) => {
  const num = props.num

  useEffect(() => {
    FetchData(num);
  }, []);

  const FetchData = (num) => {
    dispatch(GetPokemon(num));
  };

  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemonReducer);

  console.log(pokemonState, "dev");
  let pokeImage;
  const TypeArr = [];
  if (pokemonState.data.types) {
    pokeImage = pokemonState.data.sprites.front_default;
    pokemonState.data.types.map((item) => {
      TypeArr.push(item.type);
    });
  }

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />

      <ParentDiv>
        <MainDiv>
          <Styleimg src={pokeImage} alt="img" />
        </MainDiv>

        <p>Type</p>
        <ChildDiv>
          {TypeArr.map((item, index) => {
            return (
              <MainDiv key={index}>
                <StyledA href="/third"> {item.name}</StyledA>
              </MainDiv>
            );
          })}
        </ChildDiv>

        <StyleP>Name: {pokemonState.data.name}</StyleP>
      </ParentDiv>
    </>
  );
};

export default PokemonMain;
