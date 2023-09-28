export default function Area() {
    // get area api
    (async function () {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        response = await response.json()
        displayArea(response.meals)
    }())


    function displayArea(areaApi) {
        let area = ''
        for (let i = 0; i < areaApi.length; i++) {
            area += `<div onclick="FilterMeal('a','${areaApi[i].strArea}','area')" class="col-md-3 cursor-pointer text-center my-2">
            <i class="fa-solid fa-city"></i>
            <h2 class="text-white fw-lighter">${areaApi[i].strArea}</h2>
            </div>`
        }
        document.getElementById('areaRow').innerHTML = area
    }

}