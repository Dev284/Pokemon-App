import React from "react";
import '/var/www/html/React_project/pokemon/src/App.css'
import {StyledA, Styleimg} from "/var/www/html/React_project/pokemon/src/style_components/style.js";
import logo from "./logo.png"

const Header = () => {
    return(
        <>
        <StyledA href='/search'><Styleimg src={logo}/></StyledA>
        </>
    )
}

export default Header;