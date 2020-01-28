// Getting data from API -> putting it into HTML factory & adding to
// DOM.
const tsContainer = document.querySelector("#results-container")

const renderArt = (artWorks) => {
    tsContainer.innerHTML = "";
    artWorks.forEach(art => {
        tsContainer.innerHTML += artFactory(art);
    })
}






// NOW need to filter the input data to return what user entered
// to the DOM. (consider dropdown menu)




// Add intinerary container for when btn is clicked to add data to it.
