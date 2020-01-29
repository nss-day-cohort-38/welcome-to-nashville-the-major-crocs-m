const searchResultsDomManager = {
    
    
    parkFactory(park) {
        const addressArr = park.mapped_location.human_address.split("\"")
        console.log(addressArr)

        return `
            <section class="park" id='${park.acres}'>
                <h2 class="park-name" id='name-${park.acres}'>${park.park_name}</h2>
                <p class="address" id='address-${park.acres}'>${addressArr[3]}</p>
                <p class="size">${park.acres} acres</p>
                <button type="button" id='saveBtn-${park.acres}'>Add to Itinerary</button>
            </section>
        `
    },

    renderParkResults(searchResults) {
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
    },

    // itineraryFactory(park) {
    //     const addressArr = park.mapped_location.human_address.split("\"")

    //     return `
    //         <section class="park" id='save-${park.acres}'>
    //             <h2 class="park-name">${park.park_name}</h2>
    //             <p class="address">${addressArr[3]}</p>
    //         </section>
    //     `
    // },
    itineraryFactory(park) {

        return `
            <section class="park" id='save-${park.acres}'>
                <h2 class="park-name">${park.park_name}</h2>
                <p class="address">${addressArr[3]}</p>
            </section>
        `
    },

    renderItinerary(parkSelection) {
        container = document.getElementById('itinerary')

        container.innerHTML += this.itineraryFactory(parkSelection)
    }
    
}
// "mapped_location": {
//     "latitude": "36.100019",
//     "longitude": "-86.676376",
//     "human_address": "{\"address\": \"1266 Donelson Pike\", \"city\": \"Nashville\", \"state\": \"TN\", \"zip\": \"\"}"