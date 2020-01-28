



//Restaurants click functionality
const buttonKurt = document.querySelector('#KK-btn');
buttonKurt.addEventListener('click', KKUserInput.getUserInput);
// Art button click:
const artBtn = document.querySelector("#TS-btn");
artBtn.addEventListener("click", tsAPI.getArtData);
