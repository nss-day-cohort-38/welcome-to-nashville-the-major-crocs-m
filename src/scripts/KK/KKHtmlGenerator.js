const KKHtmlGenerator = {
    RestaurantFactory: (obj) => {
        return `<div class="KK-Restaurant" id="KKID-${obj.restaurant.id}">
        <h3 id="name-${obj.restaurant.id}">${obj.restaurant.name}</h3>
        <h6>Address: <span id="address-${obj.restaurant.id}">${obj.restaurant.location.address}</span></h6>
        <h6>Cuisine: <span id="cuisines-${obj.restaurant.id}">${obj.restaurant.cuisines}</span></h6>
        <img class="kk-img" src="${obj.restaurant.photos[0].photo.url}">
        <button type="button" id="saveBtn-${obj.restaurant.id}">Save</button>
        </div>`
    },
    databaseFactory: (obj) => {
        return `<div class="itenerary-item-${obj.id}">
            <h3>Name: ${obj.name}</h3>
            <h6>Address: ${obj.address}</h6>
        </div>`
    },
    unknownFactory : () => {
        return `<div class="unknown">
            <h2>Whoops, we didn't find a match. Please try a different cuisine</h2>
            <img src="https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif" class="whoops-img"> 
        </div>`
    }
}