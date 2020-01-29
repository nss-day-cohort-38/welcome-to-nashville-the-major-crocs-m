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
    console.log(event);
    objectCreator.createObjectFromID(event.target.id)
})

//View Itenerary 
const viewItenBtn = document.getElementById('see_itenerary');
viewItenBtn.addEventListener('click', DbAPI.getItenerary);
