function FilterMeal(filter, filterMeal, sectionId) {

    (async function () {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${filter}=${filterMeal}`)
        response = await response.json()
        displayFilter(response.meals)
    }(filter,filterMeal))


    function displayFilter(filterMeals) {
        let meal = ''
        for (let i = 0; i < filterMeals.length; i++) {
            meal += `<div onclick="MealDetails(${filterMeals[i].idMeal})"  class="col-md-3 cursor-pointer overflow-hidden my-3">
            <div class="position-relative   rounded content " >
                 <div><img src="${filterMeals[i].strMealThumb}" class="w-100 rounded" ></div>
    
                 <div class="show-meal d-flex justify-content-start align-items-center position-absolute show-meal-name rounded overflow-hidden" >
                     <p id="mealName" class="fw-lighter fs-2 px-2">${filterMeals[i].strMeal.split(' ').slice(0, 3).join(' ')}</p>
                 </div>
            </div>
    
         </div>`

        }
        document.getElementById('filterRow').innerHTML = meal
    }

    $('#filter').fadeIn(500)
    $('#filter').removeClass('d-none')
    $(`#${sectionId}`).addClass('d-none')
    $(`#${sectionId}`).fadeOut(500)

}