import "./App.css";
import React from "react";
import {Routes, Route } from "react-router-dom";
import PokemonMain from "./componenet/PokemonMain";
import PokemonSecond from "./componenet/PokemonSecond";
import PokemonThird from "./componenet/PokemonThird";
import {GParentDiv} from "/var/www/html/React_project/pokemon/src/style_components/style.js";


function App(props) {
  return (
    <>
      <GParentDiv className="App">
        <Routes>
          <Route path='/search' element= {<PokemonMain num={props.num}/>}/>
          <Route path='/detail' element= {<PokemonSecond num={props.num}/>}/>
          <Route path='/third' element= {<PokemonThird num={props.num}/>}/>
        </Routes>

      </GParentDiv>
    </>
  );
}

export default App;
