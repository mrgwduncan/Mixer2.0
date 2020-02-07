import request from "superagent";
const cocktails = "https://www.thecocktaildb.com/api/json/v1/1/";

export function searchByIngredient(ingredient) {
  return request
    .get(cocktails + "filter.php?i=" + ingredient)
    .then(response => response.body);
}

export function getCocktailbyId(id) {
  return request
    .get(cocktails + "lookup.php?i=" + id)
    .then(response => response.body);
}

export function getRandoCocktail() {
  return request
    .get(cocktails+ 'random.php')
    .then(response => response.body)

}


export function getCocktailByName(name) {
  return request
    .get(cocktails + 'search.php?s=' + name)
    .then(response => response.body)
}
