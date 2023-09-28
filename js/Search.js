export default function search() {
    //get api search
    async function getSearchData(searchapi, NameValue) {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${searchapi}=${NameValue}`)
        response = await response.json()
        displaySearch(response.meals)
    }
    //show meals
    function displaySearch(searchOfMeals) {
        let meals = ''
        for (let i = 0; i < searchOfMeals?.length; i++) {
            meals += `<div onclick="MealDetails('${searchOfMeals[i].idMeal}')" class="col-md-3 cursor-pointer overflow-hidden my-3">
                <div class="position-relative   rounded content " >
                     <div><img src="${searchOfMeals[i].strMealThumb}" class="w-100 rounded" ></div>
    
                     <div class="show-meal d-flex justify-content-start align-items-center position-absolute show-meal-name rounded" >
                         <p id="mealName" class="fw-lighter fs-2 px-2">${searchOfMeals[i].strMeal.split(' ').slice(0, 3).join(' ')}</p>
                     </div>
                </div>
    
             </div>`

        }
        document.getElementById('rowDataOfSearch').innerHTML = meals
    }


    let search = document.getElementById('searchByName')
    let searchFirstInput = document.getElementById('searchFirstLetter')

    //get value frome input search
    search.addEventListener('input', function () {
        let searchByNameVlue = search.value
        getSearchData('s', searchByNameVlue)
    })

    //get value from input search frist latter
    searchFirstInput.addEventListener('input', function () {
        let searchByFirstLatterValue = searchFirstInput.value
        getSearchData('f', searchByFirstLatterValue)
    })

}