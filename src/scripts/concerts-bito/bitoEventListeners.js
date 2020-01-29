// const renderConcerts = (concerts) => {
//     const bitoContainer = document.querySelector("#results-container");
//     concerts.forEach(concert => {
//         const concertHtml = concertDomFactory(concert);
//         bitoContainer.innerHTML += concertSearchResultsDom.renderUserResults(concert);
//     });
//   };

//   const searchEventManager = {
//     addSearchBtnClick() {
//       const concertButton = document.getElementById("BM-btn");
      
//       concertButton.addEventListener("click", () => {
//         console.log("button click handler", concertButton);
//         const input = document.getElementsByClassName("concert-search");
//         const searchCriteria = input.value;
//         const searchResultPromise = grabTicketMaster(searchCriteria);
//         searchResultPromise.then(userResults => {
//             console.log("USER RESULTS",userResults)
//             const concertArray = userResults._embedded.events
            
//             renderConcerts(concertArray);
//           searchResultsDomManager.renderUserResults(userResults);
//         });
//       });
//     }
//   }
