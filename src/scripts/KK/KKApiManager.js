
const KKURL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=${APIKeys.restaurants}`;
const API = {
    getRestaurantData: () =>{
      fetch(KKURL)
         .then(r => r.json())
         .then(restaurantData => {
            const restaurantArr = restaurantData.restaurants;
            KKDOMEntryManager.KKinputToDom(restaurantArr);
         })},
         searchForCuisineID(userInput) {
            const cuisineUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${userInput}&sort=rating&apikey=${APIKeys.restaurants}`
            fetch (cuisineUrl).then(r=>r.json()).then(cuisineData => {
               if (cuisineData.results_found===0){
                  KKDOMEntryManager.renderWhoops();
               } else {
                  const newArr = cuisineData.restaurants;
                  KKDOMEntryManager.KKinputToDom(newArr);
                  
            }})
         }
    
}

