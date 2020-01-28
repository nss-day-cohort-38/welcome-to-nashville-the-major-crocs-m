const KKHtmlGenerator = {
    RestaurantFactory: (obj) => {
        return `<div class="KK-Restaurant" id="KKID-${obj.restaurant.id}">
        <h3>${obj.restaurant.name}</h3>
        <h6>Address: ${obj.restaurant.location.address}</h6>
        <h6>Cuisine: ${obj.restaurant.cuisines}</h6>
        <img class="kk-img" src="${obj.restaurant.photos[0].photo.url}">
        <button type="button" class="KK-btn-${obj.restaurant.id}">Save</button>
        </div>`
    }
}