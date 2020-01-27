const KKURL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=${APIKeys.restaurants}`

fetch (KKURL)
    .then(r => r.json())
    .then(restaurantData => {
        // console.log(restaurantData)
        restaurantData.restaurants.forEach(Element => {
            if (Element.restaurant.cuisines.includes('Asian')){
                console.log(Element)
            } else {
                console.log("hey");
            }
        })
       
    })