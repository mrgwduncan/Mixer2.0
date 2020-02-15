import request from "superagent";
const cocktails = "https://www.thecocktaildb.com/api/json/v1/1/";

export function getByIngredient(ingredient) {
  return request
    .get(cocktails + "filter.php?i=" + ingredient)
    .then(response => response.body);
}

export function getCocktailbyId(id) {
  return request
    .get(cocktails + "lookup.php?i=" + id)
    .then(response => response.body)
    .then(results => {
      console.log(results);
      let newarr = [];
      let drink = results.drinks[0];
      for (let i = 1; i < 15; i++) {
        let ing = ["strIngredient" + i];
        let measure = ["strMeasure" + i];
        if (drink[ing]) {
          newarr.push({
            ing: drink[ing],
            measure: drink[measure]
          });
        }
      }
      drink.ingredients = newarr;
      return drink;
    });
}

export function getRandomCocktail(int) {
  return request
  .get(cocktails + "random.php")
  .then(response => response.body)
}

export function getCocktailByName(name) {
  return request
    .get(cocktails + "search.php?s=" + name)
    .then(response => response.body);
}
export function getCocktailByCatagory(Catagory) {
  return request
    .get(cocktails + "filter.php?c=" + Catagory)
    .then(response => response.body);
}

export function getCocktailByType(type) {
  return request
    .get(cocktails + "filter.php?a=" + type)
    .then(response => response.body);
}

export function getCocktailByFirst(first) {
  return request
    .get(cocktails + "search.php?f=" + first)
    .then(response => response.body);
}
