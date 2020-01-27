const ticketMasterBaseUrl = "https://app.ticketmaster.com/discovery/v2/events.json"

// vvv !!DOESN'T WORK YET!!: Takes info user inputs in search field and fetches API data. classificationName= music, stateCode=TN and dmaId=343 (Nashville) vvv //

const searchTicketMaster = (searchInput) => fetch(`${ticketMasterBaseUrl}?apikey=${concertsTicketMasterKey}&stateCode=TN&dmaID=343&classificationName=${searchInput}`)
.then(tmData => tmData.json())
.then(searchResults => {
    console.log(searchResults);
})


const apiManager = {
    searchTicketMaster(searchCriteria) {
         // console.log(searchTicketMaster);
        
         const url = ticketMasterBaseUrl + `?apikey=${concertsTicketMasterKey}&stateCode=TN&dmaID=343&classificationName=${searchInput}`;
        
        return fetch(url).then(resp => resp.json());
    }
}