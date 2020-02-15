import { combineReducers } from "redux";

import search from "./search";
import control from "./control";
import indentifier from "./indentifier";
import cocktail from "./cocktail";
import type from "./type";
import selected from "./selected";
import randomCocktailOne from "./randomCocktailOne"
import randomCocktailTwo from "./randomCocktailTwo"
import randomCocktailThree from "./randomCocktailThree"
const reducers = combineReducers({
  search,
  control,
  indentifier,
  cocktail,
  type,
  selected,
  randomCocktailOne,
  randomCocktailTwo,
  randomCocktailThree
});

export default reducers;
