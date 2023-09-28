export default function Category() {
    //get category api 
    (async function () {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        response = await response.json()
        displayCategories(response.categories)
    })();

    function displayCategories(categoriesMeals) {
        let categories = ''
        for (let i = 0; i < categoriesMeals.length; i++) {
            categories += `<div  onclick="FilterMeal('c','${categoriesMeals[i].strCategory}','category')"  class="col-md-3 cursor-pointer overflow-hidden my-3">
         <div class="position-relative   rounded content " >
              <div><img src="${categoriesMeals[i].strCategoryThumb}" class="w-100 rounded" ></div>

              <div class="show-meal d-flex justify-content-start align-items-center position-absolute show-meal-name rounded" >
                  <p id="mealName" class="fw-lighter fs-2 px-2">${categoriesMeals[i].strCategory}</p>
              </div>
         </div>

      </div>`

        }
        document.getElementById('categoryRow').innerHTML = categories
    }

}