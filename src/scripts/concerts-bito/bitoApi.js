const bitoBaseUrl = "https://app.ticketmaster.com/discovery/v2/events.json"

// vvv Takes info user inputs in search field and fetches API data. classificationName= music, stateCode=TN and dmaId=343 (Nashville) vvv //
const searchTicketMaster = (searchInput) => {
    const searchUrl = `${bitoBaseUrl}?apikey=${APIKeys.concerts}&stateCode=TN&dmaID=343&classificationName=${searchInput}`;
    fetch(searchUrl)
        .then(tmData => tmData.json())
        .then(searchResults => {
            console.log(searchResults)
            const newArray = searchResults._embedded.events
            renderConcerts(newArray);
        })
}