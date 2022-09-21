import styled from "styled-components";


export const GParentDiv = styled.div`
  font-family: Neucha,sans-serif;
  background-color: #88c573;
  height: 100vh;
`

export const MainDiv = styled.div`
  font-family: Neucha,sans-serif;
  display: flex;
  background-color: white;
  margin: 10px 10px;
  padding: 20px 20px;
  justify-content: center;
  border: 2px solid black;

`
export const StyledA = styled.a`
  text-decoration: none;
  color: black;
`

export const Button = styled.button`
    align-self: center;
    background-color: white;
    color: #41403e;
    border: 2px solid #41403e;
    font-size: 1rem;
    margin-left: 10px;
  cursor: pointer;
  padding: 8px 20px;

`


export const ParentDiv = styled.div`
    border: 2px solid black;
    padding: 5px;
    max-width: 400px;
    width: 100%;
    background-color: #72b7c4;
    display: inline-block;
    margin: 0 auto;
`

export const ChildDiv = styled.div`
  /* padding: 20px; */
  display: flex;
  justify-content: center;
`

export const StyleUl = styled.ul`
  list-style-type: none;
`

export const StyleLi = styled.li`
    border: 2px solid black;
    padding: 10px 10px;
    max-width: 400px;
    width: 100%;
    background-color: white;
    display: inline-block;
    margin: 2px 2px;
  &:hover {
    box-shadow: 3px 3px gray;
    cursor: pointer;
  }
`

export const StyleP = styled.p`
  text-align: center;
  border: 2px solid black;
  background-color: white;
  padding: 10px;
`

export const StyleInput = styled.input`
    font-family: Neucha,sans-serif;
    background: white;
    color: black;
    font-size: 1rem;
    padding: 0.5rem;
    margin: 10px 10px;
    border: 2px solid #41403e;
  &:hover {
    /* cursor: pointer; */
    box-shadow: 0px 0px 2px 2px gray;
  }
`


export const Styledh1 = styled.h1`
  margin: 10px;
  font-weight: 400;
`

export const StyledSelect = styled.select`
  display: block;
    background: transparent;
    color: #41403e;
    outline: none;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
    font-size: 1rem;
    padding: 0.5rem;
    border: 2px solid #41403e;
  &:hover {
    box-shadow: 0px 0px 2px 2px blue;
    cursor: pointer;
  }
`

export const StyledOption = styled.option`
  padding: 10px;
`

export const StyledLabel = styled.label`
  cursor: pointer;
  padding: 20px 0 10px 100px;
`
export const Styleimg = styled.img`
  cursor: pointer;
  height: 230px;
  min-width: 200px;
  background-color: black;
  border: 2px solid black;

`