const searchEventManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("JAM-btn")
        button.addEventListener("click", () => {
            const input = document.getElementById("JAM-input")
            const searchCriteria = input.value
            const searchResultPromise = apiManager.searchNashvilleParks(searchCriteria)
            searchResultsPromise.then(searchResults => {
                searchResultDomManager.renderSearchResults(searchResults)
                console.log(input.value)
            })
        })
    },

    addSearchEnterEventListener() {
        const input = document.getElementById("JAM-input")
        console.log(input)
        input.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                
                const searchCriteria = input.value
                const searchResultPromise = apiManager.searchNashvilleParks(searchCriteria)
                searchResultPromise.then(searchResults => {
                    searchResultsDomManager.renderSearchResults(searchResults)
                   
                    // My attempt to make a conditional return of no results
                   
                    // if (searchResults === []) {
                    //     results.innerHTML = "No bus stops with that criteria. Keep Searching! :)"
                    // }
                    // console.log(searchResults)
                })
            };
        
        })
    }
}