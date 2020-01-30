//  **** Event listeners for the tabs! ******

const concertTab = document.getElementById('concertTab')
concertTab.addEventListener('click', () => {

})

const artTab = document.getElementById('artTab')
artTab.addEventListener('click', () => {
    
})

const restaurantTab = document.getElementById('restaurantTab')
restaurantTab.addEventListener('click', () => {
    
})

const parksTab = document.getElementById('parkTab')
parksTab.addEventListener('click', () => {
    
})




//Restaurants click functionality
const buttonKurt = document.querySelector('#KK-btn');
buttonKurt.addEventListener('click', KKUserInput.getUserInput);

//parks event search listener
parksSearchEventManager.addSearchClickEventListener();
parksSearchEventManager.addSearchEnterEventListener();

// Art 'Show All' button click:
const artBtn = document.querySelector("#show-all");
artBtn.addEventListener("click", tsAPI.getArtData);
// Art 'Search!' button click:
const tsSearchBtn = document.querySelector("#TS-btn");
tsSearchBtn.addEventListener("click", getUserInput);

//Save Clickin!
const resultsDiv = document.getElementById('results-container');
resultsDiv.addEventListener('click', (event) => {
    const idSplit = event.target.id.split('-')
    if (event.target.id.includes('saveBtn')) {
        objectCreator.createObjectFromID(idSplit[1])
            .then(DbAPI.getItenerary)
            .then(itneraryDomManager.renderItinerary)
    }
})

//View Itenerary 
const viewItenBtn = document.getElementById('see_itenerary');
viewItenBtn.addEventListener('click', DbAPI.getItenerary);

// DbAPI.getItenerary();

//Delete Button
const IteneraryContainer=document.getElementById('itinerary');
IteneraryContainer.addEventListener('click', (event) => {
    console.log(event);
    const splitId = event.target.id.split('-');
    if (splitId[0]==='deleteBtn'){
        DbAPI.deleteDataFromAPI(splitId[1])
        .then(DbAPI.getItenerary)
        .then(itneraryDomManager.renderItinerary)
    }
})