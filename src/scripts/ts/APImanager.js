const tsAPI = {
    getArtData() {
        fetch("https://data.nashville.gov/resource/eviu-nxp6.json")
            .then(resp => resp.json())
            .then(artWorks => {
                renderAllArt(artWorks);
            })
    },

    searchArtwork(userInput) {
        fetch(`https://data.nashville.gov/resource/eviu-nxp6.json?artwork=${userInput}`)
        .then(resp => resp.json())
        .then(parsedResp => {
            console.log(parsedResp)
            renderArt(parsedResp[0]);
        })
    }
};