import React, { useEffect, useState } from "react";
import "/var/www/html/React_project/pokemon/src/App.css";
import Header from "./header";
import {
  MainDiv,
  ParentDiv,
  StyleP,
  StyleInput,
  StyledA,
  Styleimg,
  ChildDiv,
  Button,
} from "/var/www/html/React_project/pokemon/src/style_components/style.js";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../action/action";

const PokemonMain = (props) => {
  const [Data, setNum] = useState({ num: Math.floor(Math.random() * 500) });

  useEffect(() => {
    FetchData(Data.num);
  }, []);

  const FetchData = (num) => {
    dispatch(GetPokemon(num));
  };

  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemonReducer);

  let pokeImage;
  if (pokemonState.data.types) {
    pokeImage = pokemonState.data.sprites.front_default;
  }

  const handleChange = (event) => {
    setNum({
      ...Data,
      Num: event.target.value,
    });
    console.log(Data.num);
  };

  const handelSubmit = (event) => {
    event.preventDefault();

    const input = {
      id: Data.num,
    };
    console.log(input);
  };

  return (
    <>
      <Header />
      <ChildDiv>
        <form onSubmit={handelSubmit}>
          <StyleInput
            type="text"
            placeholder="Enter Pokemon..."
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </form>
      </ChildDiv>

      <ParentDiv>
        <MainDiv>
          <StyledA href="/detail">
            <Styleimg src={pokeImage} alt="img" />
          </StyledA>
        </MainDiv>

        <StyleP>Name: {pokemonState.data.name}</StyleP>
      </ParentDiv>
    </>
  );
};

export default PokemonMain;
