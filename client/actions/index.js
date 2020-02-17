import request from "superagent";
import {
  getByIngredient,
  getCocktailbyId,
  getCocktailByName,
  getCocktailByType,
  getCocktailByCatagory,
  getCocktailByFirst,
  getRandomCocktail
} from "../api";

export const UPDATE_CONTROL = "UPDATE_CONTROL";
export const UPDATE_SEARCHRESULTS = "UPDATE_SEARCHRESULTS";
export const SET_INGREDIENT = "SET_INGREDIENT";
export const SET_INDENTIFIER = "SET_INDENTIFIER";
export const UPDATE_COCKTAIL = "UPDATE_COCKTAIL";
export const SET_NAME = "SET_NAME";
export const SET_CATAGORY = "SET_CATAGORY";
export const SET_TYPE = "SET_TYPE";
export const SET_FIRST = "SET_FIRST";
export const SET_SELECTED = "SET_SELECTED";
export const SET_RANDOMONE = "SET_RANDOMONE";
export const SET_RANDOMTWO = "SET_RANDOMTWO";
export const SET_RANDOMTHREE = "SET_RANDOMTHREE";
export const SET_RANDOM = "SET_RANDOM";
export const CLEAR_SEARCHRESULTS = "CLEAR_SEARCHRESULTS"

export function updateControl(int) {
  return {
    type: UPDATE_CONTROL,
    result: int
  };
}

export function fetchByIngredient(obj) {
  return dispatch => {
    return getByIngredient(obj).then(data => {
      return dispatch(setDrinks(data));
    });
  };
}
export function fetchByCatagory(obj) {
  return dispatch => {
    return getCocktailByCatagory(obj).then(data => {
      return dispatch(setDrinks(data));
    });
  };
}
export function fetchByType(obj) {
  return dispatch => {
    return getCocktailByType(obj).then(data => {
      return dispatch(setDrinks(data));
    });
  };
}
export function fetchByFirst(obj) {
  return dispatch => {
    return getCocktailByFirst(obj).then(data => {
      return dispatch(setDrinks(data));
    });
  };
}
export function fetchByName(str) {
  console.log("fetch by name ");
  return dispatch => {
    return getCocktailByName(str).then(data => {
      return dispatch(setDrinks(data));
    });
  };
}
export const setDrinks = drinks => {
  return {
    type: UPDATE_SEARCHRESULTS,
    drinks: drinks
  };
};

export function fetchById(int) {
  return dispatch => {
    return getCocktailbyId(int).then(data => {
      return dispatch(setCocktail(data));
    });
  };
}
export const setCocktail = cocktail => {
  return {
    type: UPDATE_COCKTAIL,
    cocktail: cocktail
  };
};
export function updateSearchResults(arr) {
  return {
    type: UPDATE_SEARCHRESULTS,
    drinks: arr
  };
}
export function setIngredient(str) {
  return {
    type: SET_INGREDIENT,
    ingredient: str
  };
}
export function setName(str) {
  return {
    type: SET_NAME,
    name: str
  };
}
export function setCatagory(str) {
  return {
    type: SET_CATAGORY,
    catagory: str
  };
}

export function setType(str) {
  return {
    type: SET_TYPE,
    ctype: str
  };
}
export function setFirst(str) {
  return {
    type: SET_FIRST,
    frist: str
  };
}
export function setSelected(str) {
  return {
    type: SET_SELECTED,
    selected: str
  };
}
export function setRandom(obj) {
  return {
    type: SET_RANDOM,
    random: obj
  };
}
export function setRandomOne(obj) {
  return {
    type: SET_RANDOMONE,
    random: obj
  };
}
export function setRandomTwo(obj) {
  return {
    type: SET_RANDOMTWO,
    random: obj
  };
}
export function setRandomThree(obj) {
  return {
    type: SET_RANDOMTHREE,
    random: obj
  };
}
export function fetchRandom(int) {
  if (int == 0) {
    return dispatch => {
      return getRandomCocktail(int).then(data => {
        dispatch(setRandom(data));
        dispatch(fetchById(data.drinks[0].idDrink))
        return dispatch(updateControl(3));
      });
    };
  }

  if (int == 1) {
    return dispatch => {
      return getRandomCocktail(int).then(data => {
        return dispatch(setRandomOne(data));
      });
    };
  }
  if (int == 2) {
    return dispatch => {
      return getRandomCocktail(int).then(data => {
        return dispatch(setRandomTwo(data));
      });
    };
  }
  if (int == 3) {
    return dispatch => {
      return getRandomCocktail(int).then(data => {
        return dispatch(setRandomThree(data));
      });
    };
  }
}

export function clearSearch() { 
  return {
    type: CLEAR_SEARCHRESULTS
  }
}
