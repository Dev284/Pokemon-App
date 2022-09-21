import axios from "axios";

export const GetPokemon = (pokemon) => async (dispatch) => {
    try {
      dispatch({
        type: "POKEMON_MULTIPLE_LOADING",
      });

      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );

      dispatch({
        type: "POKEMON_MULTIPLE_SUCCESS",

        payload: res.data,

        pokemonName: pokemon,
      });
    } catch (error) {
      dispatch({
        type: "POKEMON_MULTIPLE_FAIL",
      });
    }
};

// export const GetPokemonType = (pokemon) => async (dispatch) => {

//   // console.log(pokemon, "dev")
//     const res = await axios.get(pokemon);

//     dispatch({
//       type: "GET_POKEMON_TYPE",

//       payload: res.data,
//     });
// };







  // dispatch({
  //   type: "GET_POKEMON_TYPE",

  //   payload: pokemon,

  //   pokemonName: pokemon,
  // });
