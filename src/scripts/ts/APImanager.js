const tsAPI = {
    getArtData() {
        fetch("https://data.nashville.gov/resource/eviu-nxp6.json")
            .then(resp => resp.json())
            .then(artWorks => {
                renderArt(artWorks);
            })
    }
};