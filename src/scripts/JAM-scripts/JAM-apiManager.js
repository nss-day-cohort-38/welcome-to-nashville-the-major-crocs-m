const apiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json?"


const apiManager = {
    searchNashvilleParks(searchCriteria) {
        const criteria = encodeURIComponent(`"%${searchCriteria}%"`)
        const url = apiBaseUrl + `$park_name= like ${criteria}`
        return fetch(url).then(resp => resp.json())
    }
};

const displayParkNames = ( )=> {
    fetch(apiBaseUrl)
        .then(resp=>resp.json)
        .then(parks => { console.log(parks)
        })

}
