import request from "superagent";
const cocktails = "https://www.thecocktaildb.com/api/json/v1/1/";

export function searchByIngredient(ingredient) {
  return request.get(cocktails+"search.php?i="+ingredient).then(response => response.body);
}
export function searchByIngredientId(ingredientId) {
  return request.get(cocktails+"lookup.php?iid"+id).then(response => response.body);
}
