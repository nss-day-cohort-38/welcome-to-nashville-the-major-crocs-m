
const renderConcerts = (concerts) => {
    const bitoContainer = document.querySelector("#results-container");
    concerts.forEach(concert => {
        // const concertHtml = concertDomFactory(concert);
        bitoContainer.innerHTML += concertDomFactory(concert);
    });
  };
