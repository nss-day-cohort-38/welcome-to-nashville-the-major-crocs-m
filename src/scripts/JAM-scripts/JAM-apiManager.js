const parksAPIBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json?"


const parksAPIManager = {
    searchNashvilleParks(option) {
        const url = parksAPIBaseUrl + `${option.value}=Yes`
        return fetch(url).then(resp => resp.json())
    },

    choosePark(option) {
        const url = parksAPIBaseUrl + `acres=${option}`;
        return fetch(url).then(resp => resp.json());
    }
};

