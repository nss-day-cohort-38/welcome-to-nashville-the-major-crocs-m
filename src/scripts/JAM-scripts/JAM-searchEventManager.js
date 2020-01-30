const parksSearchEventManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("JAM-btn")
        button.addEventListener("click", () => {
            const option = document.getElementById("JAM-select")
            const searchResultPromise = parksAPIManager.searchNashvilleParks(option)
            searchResultPromise.then(searchResults => {
                searchResultsDomManager.renderParkResults(searchResults)
            })
        })
    },

    addSearchEnterEventListener() {
        const option = document.getElementById('JAM-select')
        
        option.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                const searchResultPromise = parksAPIManager.searchNashvilleParks(option)
                searchResultPromise.then(searchResults => {
                    searchResultsDomManager.renderParkResults(searchResults)
                   
                })
            };
        
        })
    },

    addItineraryEventListener() {
        const resultsDiv = document.getElementById('results-container')
        
        resultsDiv.addEventListener('click', (event) => {
            const idSplit = event.target.id.split('-')

            if (event.target.id.includes('saveBtn')) {

            const searchResultPromise = parksAPIManager.choosePark(idSplit[1])
                
                searchResultPromise.then(searchResults => {
                    searchResultsDomManager.renderItinerary(searchResults[0])
                    }
                )
            }
    })
    }
}
