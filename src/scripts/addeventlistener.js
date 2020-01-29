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