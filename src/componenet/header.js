import React from "react";
import '../App.css'
import {StyledA, Styleimg} from "../style_components/style.js";
import logo from "./logo.png"

const Header = () => {
    return(
        <>
        <StyledA href='/search'><Styleimg src={logo}/></StyledA>
        </>
    )
}

export default Header;