const artFactory = (art) => {
    return `
        <section style="margin-top: 10px">
            <div>Artwork: ${art.artwork}</div>
            <div>Artist: ${art.first_name} ${art.last_name}</div>
            <div>Location: ${art.location}</div>
        </section>
        <button id="add-art" style="margin-bottom: 10px">Add to Itinerary</button>
    `
}