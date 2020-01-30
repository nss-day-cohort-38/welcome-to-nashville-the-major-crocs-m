const searchResultsDomManager = {
    
    
    parkFactory(park) {
        const addressArr = park.mapped_location.human_address.split("\"")

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
        });   
        if (container.innerHTML == "") {
            container.innerHTML = "No park found . . . Search Again!"
        }
    },
}

const itneraryDomManager = {
    itineraryFactory(obj) {

        return `
            <section class="obj" id='-${obj.id}'>
                <h2 class="obj-name">${obj.name}</h2>
                <p class="obj-address">${obj.address}</p>
                <button type="button" id="deleteBtn-${obj.id}">Delete me</button>
            </section>
        `
    },

    renderItinerary(arr) {
        const newArr = arr.reverse();
        const container = document.getElementById('itinerary');
        container.innerHTML="";
    
        newArr.forEach(obj => {
            const html = `
            <section class="obj" id='-${obj.id}'>
                <h2 class="obj-name">${obj.name}</h2>
                <p class="obj-address">${obj.address}</p>
                <button type="button" id="deleteBtn-${obj.id}">Delete me</button>
            </section>
        `
            container.innerHTML += html;
        })
    }
    
}
// "mapped_location": {
//     "latitude": "36.100019",
//     "longitude": "-86.676376",
//     "human_address": "{\"address\": \"1266 Donelson Pike\", \"city\": \"Nashville\", \"state\": \"TN\", \"zip\": \"\"}"