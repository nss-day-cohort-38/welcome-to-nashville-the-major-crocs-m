const tsContainer = document.querySelector("#results-container")

const renderArt = (artWorks) => {
    artWorks.forEach(art => {
        tsContainer.innerHTML += artFactory(art);
    })
}