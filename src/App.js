import "./App.css";
import React from "react";
import {Routes, Route } from "react-router-dom";
import PokemonMain from "./componenet/PokemonMain";
import PokemonSecond from "./componenet/PokemonSecond";
import PokemonThird from "./componenet/PokemonThird";
import {GParentDiv} from './style_components/style';


function App(props) {
  return (
    <>
      <GParentDiv className="App">
        <Routes>
          <Route path='/' element= {<PokemonMain num={props.num}/>}/>
          <Route path='/detail' element= {<PokemonSecond num={props.num}/>}/>
          <Route path='/type' element= {<PokemonThird num={props.num}/>}/>
        </Routes>

      </GParentDiv>
    </>
  );
}

export default App;
