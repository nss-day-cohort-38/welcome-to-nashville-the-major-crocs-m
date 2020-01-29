// vvv Takes info user inputs in search field and fetches API data. classificationName= music, stateCode=TN and dmaId=343 (Nashville) vvv //

// vvv creates base url for interpolation in searchUrl vvv //
const bitoBaseUrl = "https://app.ticketmaster.com/discovery/v2/events.json";

// vvv creates a variable/function to fetch data from API then parses it to JSON vvv ///
const grabTicketMaster = (searchInput) => {
    const searchUrl = `${bitoBaseUrl}?apikey=${APIKeys.concerts}&stateCode=TN&dmaID=343&classificationName=${searchInput}`;
    return fetch(searchUrl)
        .then(tmData => tmData.json())
};


// vvv Render DOM vvv //
concertSearchResultsDom = {

    concertDomFactory(concert) {
      return `
      <section class="concerts">
      <div>Band: ${concert.name}</div>
      <div>Date: ${concert.dates.start.localDate}</div>
      <div>Genre: ${concert.classifications[0].genre.name}</div>
      </section>
      `;
    },
    renderUserResults(userResults) {
      const container = document.querySelector("#results-container");
      container.innerHTML = ""
      userResults.forEach(concert => {
          container.innerHTML += this.concertDomFactory(concert)
          console.log('item added')
      });   
      if (container.innerHTML == "") {
          container.innerHTML = "No concert found . . . 😬"
      }
      console.log(userResults)
  }
    }



// vvv Events vvv //

  const searchConcertManager = {
    addSearchBtnClick() {
      const concertButton = document.getElementById("BM-btn");
      
      concertButton.addEventListener("click", () => {
        console.log("button click handler", concertButton);
        const input = document.querySelector(".concert-search");
        const searchCriteria = input.value;
        console.log("test", searchCriteria)
        const searchResultPromise = grabTicketMaster(searchCriteria);
        searchResultPromise.then(userResults => {
            const concertArray = userResults._embedded.events
            console.log("USER RESULTS",userResults)
            
            concertSearchResultsDom.renderUserResults(concertArray);
        });
      });
    }
  };



// vvv search 
  const concertInputField = document.getElementById("BM-input");
  getUserInput: () => {
      const userInput = concertInputField.value; 
      const allLower = userInput.toLowerCase();
      const capitolizedInput = allLower.charAt(0).toUpperCase() + allLower.slice(1);
   grabTicketMaster(capitolizedInput);
  };