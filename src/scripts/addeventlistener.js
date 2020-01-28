



//Restaurants click functionality
const buttonKurt = document.querySelector('#KK-btn');
buttonKurt.addEventListener('click', KKUserInput.getUserInput);
// Art button click:
const artBtn = document.querySelector("#TS-btn");
artBtn.addEventListener("click", tsAPI.getArtData);

//Save Clickin!
const resultsDiv = document.getElementById('results-container');
resultsDiv.addEventListener('click', (event) => {
    console.log(event);
    objectCreator.createObjectFromID(event.target.id)
})

//View Itenerary 
const viewItenBtn = document.getElementById('see_itenerary');
viewItenBtn.addEventListener('click', DbAPI.getItenerary);
