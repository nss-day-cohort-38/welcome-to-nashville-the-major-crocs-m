const bitoConcertHtml = (concert, index) => `
  <li>
    <span id="concertResultText-${index}">${concert.name}: ${concert._embedded.venues[0].name}</span>
    <button type="button" id="concertResultButton-${index}">Save</button>
  </li>
  `