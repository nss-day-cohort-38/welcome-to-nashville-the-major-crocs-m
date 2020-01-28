  
const concertDomFactory = (concert) => {
    return `
      <section class="concerts">
        <div>Band: ${concert.name}</div>
        <div>Date: ${concert.dates.start.localDate}</div>
        <div>Genre: ${concert.classifications[0].genre.name}</div>
      </section>
    `;
  };
  
  