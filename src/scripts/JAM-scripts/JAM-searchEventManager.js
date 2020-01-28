const parksSearchEventManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("JAM-btn")
        button.addEventListener("click", () => {
            const option = document.getElementById("JAM-select")
            const searchResultPromise = parksAPIManager.searchNashvilleParks(option)
            searchResultPromise.then(searchResults => {
                searchResultsDomManager.renderSearchResults(searchResults)
                console.log(option.value)
            })
        })
    },

    addSearchEnterEventListener() {
        const option = document.getElementById('JAM-select')
        
        option.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                console.log(option.value)
                const searchCriteria = option.querySelector('option').value
                const searchResultPromise = parksAPIManager.searchNashvilleParks(searchCriteria)
                searchResultPromise.then(searchResults => {
                    searchResultsDomManager.renderSearchResults(searchResults)
                   
                })
            };
        
        })
    },

}