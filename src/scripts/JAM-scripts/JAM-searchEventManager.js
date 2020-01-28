const parksSearchEventManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("JAM-btn")
        button.addEventListener("click", () => {
            const option = document.getElementById("JAM-select")
            const searchResultPromise = parksAPIManager.searchNashvilleParks(option)
            searchResultPromise.then(searchResults => {
                searchResultsDomManager.renderParkResults(searchResults)
                // console.log(option.value)
            })
        })
    },

    addSearchEnterEventListener() {
        const option = document.getElementById('JAM-select')
        
        option.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                const searchResultPromise = parksAPIManager.searchNashvilleParks(option)
                searchResultPromise.then(searchResults => {
                    searchResultsDomManager.renderParksResults(searchResults)
                   
                })
            };
        
        })
    },

    addItineraryEventListener() {
        const itineraryDiv = document.getElementById('results-container')
        
        itineraryDiv.addEventListener('click', (event) => {
            const idSplit = event.target.id.split('-')
            console.log(idSplit[1])

            if (event.target.id.includes('saveBtn')) {

            const searchResultPromise = parksAPIManager.choosePark(idSplit[1])
                
                searchResultPromise.then(searchResults => {
                    console.log(searchResults)
                    searchResultsDomManager.renderItinerary(searchResults[0])
                    }
                )
            }
    })
    }
}
