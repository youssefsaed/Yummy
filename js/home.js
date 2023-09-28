
export default function Home() {


    //get api for home
    (async function () {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= `)
        response = await response.json()
        display(response.meals)
    }())


    //show meals
    function display(homeOfMeals) {

        let meals = ''
        for (let i = 0; i < homeOfMeals.length; i++) {

            meals += `<div  onclick="MealDetails(${homeOfMeals[i].idMeal})"  class="col-md-3 cursor-pointer overflow-hidden my-3">
        <div class="position-relative   rounded content " >
             <div><img src="${homeOfMeals[i].strMealThumb}" class="w-100 rounded" ></div>

             <div class="show-meal d-flex justify-content-start align-items-center position-absolute show-meal-name rounded" >
                 <p id="mealName" class="fw-lighter fs-2 px-2">${homeOfMeals[i].strMeal.split(' ').slice(0, 3).join(' ')}</p>
             </div>
        </div>

     </div>`
        }
        document.getElementById('rowDataHome').innerHTML = meals
    }


    $('#homeMeals').ready(function () {
        $('.fa-spinner').fadeOut(500, function () {
            $('#loading').fadeOut(500, function () {
                $('#loading').remove()
                $('body').css('overflow', 'auto')
            })
        })
    })
}