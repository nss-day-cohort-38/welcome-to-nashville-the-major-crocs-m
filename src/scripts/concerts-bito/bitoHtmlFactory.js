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
        container.innerHTML = "Concert not found . . . 😬"
    }
    console.log(userResults)
}
  
}