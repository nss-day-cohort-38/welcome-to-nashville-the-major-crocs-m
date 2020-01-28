
const KKURL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=${APIKeys.restaurants}`;
const API = {
    getRestaurantData: () =>{
      fetch(KKURL)
         .then(r => r.json())
         .then(movieData => {
            // console.log(movieData.restaurants[0].restaurant.name)
            const movieArr = movieData.restaurants;
            console.log(movieArr);
            KKDOMEntryManager.KKinputToDom(movieArr);
         })},
         searchForCuisineID(userInput) {
            const cuisineUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${userInput}&sort=rating&apikey=${APIKeys.restaurants}`
            fetch (cuisineUrl).then(r=>r.json()).then(cuisineData => {
                  // console.log(cuisineData);
                  const newArr = cuisineData.restaurants;
                  // console.log(newArr)
                  KKDOMEntryManager.KKinputToDom(newArr);
                  
            })
         }
    
}

