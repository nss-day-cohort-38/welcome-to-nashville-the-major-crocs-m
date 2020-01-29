
// I want this code to appear when user hits search btn 
const artFactory = (art) => {
    return `
        <section style="margin-top: 10px">
            <div>Artwork: ${art.artwork}</div>
            <div>Artist: <span id="name-${art.last_name}">${art.first_name} ${art.last_name}</span></div>
            <div>Location: <span id="address-${art.last_name}">${art.location}</span></div>
        </section>
        <button id="saveBtn-${art.last_name}" style="margin-bottom: 10px">Add to Itinerary</button>
    `
}

function getUserInput() {
    const val = document.getElementById("ts-select").value;
    tsAPI.searchArtwork(val);
}