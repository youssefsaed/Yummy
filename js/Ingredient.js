export default function Ingredient() {
    (async function () {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        response = await response.json()
        displayIngredients(response.meals)
    }())


    function displayIngredients(ingredientsMeals) {
        let ingredients = ''
        for (let i = 0; i < 21; i++) {
            ingredients += ` <div onclick="FilterMeal('i','${ingredientsMeals[i].strIngredient}','ingredients')"  class="col-md-3 cursor-pointer text-center my-2">
                <i class="fa-solid fa-bowl-food"></i>
                <h2 class="text-white fw-lighter">${ingredientsMeals[i].strIngredient}</h2>
                <p class=" text-white">${ingredientsMeals[i].strDescription.slice(0,65)}</p>
            </div>`
        }
        document.getElementById('ingredientsRow').innerHTML = ingredients
    }

}