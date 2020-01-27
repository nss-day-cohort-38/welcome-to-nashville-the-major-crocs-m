const apiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json?"


const apiManager = {
    searchNashvilleParks(searchCriteria) {
        const criteria = encodeURIComponent(`"%${searchCriteria.toUpperCase()}%"`)
        const url = apiBaseUrl + `$where=route_name like ${criteria}`
        return fetch(url).then(resp => resp.json())
    }
};
