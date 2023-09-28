function MealDetails(mealId) {

    (async function () {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        response = await response.json()
        showDetailes(response.meals)
    }(mealId))


    function showDetailes(mealDetails) {


        let meal = mealDetails[0].strMealThumb
        document.getElementById('mealIdImag').setAttribute('src', meal)
        document.getElementById('strMeal').innerHTML = mealDetails[0].strMeal
        document.getElementById('strInstructions').innerHTML = mealDetails[0].strInstructions
        document.getElementById('strArea').innerHTML = mealDetails[0].strArea
        document.getElementById('strCategory').innerHTML = mealDetails[0].strCategory
        document.getElementById('strSource').setAttribute('href', mealDetails[0].strSource)
        document.getElementById('strYoutube').setAttribute('href', mealDetails[0].strYoutube)
        tags(mealDetails[0])
        recipes(mealDetails[0])
    }


    function tags(mealDetails) {
        let tags = mealDetails.strTags?.split(',')
        let Tags = ''
        for (let i = 0; i < tags?.length; i++) {
            Tags += `<div class="tags rounded mx-2 my-3 p-2">${tags[i]}</div>`
        }
        document.getElementById('strTags').innerHTML = mealDetails.strTags ? Tags : ''
    }

    function recipes(mealdetails) {
        let Recipes = ''
        for (let i = 1; i <= 20; i++) {
            if (mealdetails[`strIngredient${i}`]) {
                Recipes += `<div class="recipes-item  bg-white w-auto text-black rounded m-2 p-1">${mealdetails[`strMeasure${i}`]} ${mealdetails[`strIngredient${i}`]}</div>`
            }

        }
        document.getElementById('recipesRow').innerHTML = Recipes
    }

    //animate
    $('#showDetailsMeals').fadeIn(500)
    $('#showDetailsMeals').removeClass('d-none')
    $('#homeMeals').fadeOut(500)
    $('#search').fadeOut(500)
    $('#filter').fadeOut(500)

}