const searchResultsDomManager = {
    
    
    parkFactory(park) {
        const addressArr = park.mapped_location.human_address.split("\"")
        console.log(addressArr)

        return `
            <section class="park">
                <div class="park-name">${park.park_name}</div>
                <div class="address">${addressArr[3]}</div>
                <div class="size">${park.acres} acres</div>
            </section>
        `
    },


    renderSearchResults(searchResults) {
        const container = document.querySelector("#results-container");
        container.innerHTML = ""
        searchResults.forEach(park => {
            container.innerHTML += this.parkFactory(park)
            console.log('item added')
        });   
        if (container.innerHTML == "") {
            container.innerHTML = "No park found . . . Search Again!"
        }
        console.log(searchResults)
    }
    
}
// "mapped_location": {
//     "latitude": "36.100019",
//     "longitude": "-86.676376",
//     "human_address": "{\"address\": \"1266 Donelson Pike\", \"city\": \"Nashville\", \"state\": \"TN\", \"zip\": \"\"}"