const artFactory = (art) => {
    return `
        <section>
            <div>Artwork: ${art.artwork}</div>
            <div>Artist: ${art.first_name} ${art.last_name}</div>
            <div>Location: ${art.location}</div>
        </section>
    `
}