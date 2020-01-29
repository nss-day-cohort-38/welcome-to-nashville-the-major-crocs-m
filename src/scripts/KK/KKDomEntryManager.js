const resultsContainer=document.querySelector('#results-container');
const KKDOMEntryManager = {
    KKinputToDom: (arr) => {
        resultsContainer.innerHTML = "";
        console.log(arr.restaurant);
        arr.forEach(obj => {
            console.log(obj);
            let html = KKHtmlGenerator.RestaurantFactory(obj)
            resultsContainer.innerHTML += html;
        })
    }, IteneraryinputToDom: (arr) => {
        resultsContainer.innerHTML = "";
        arr.forEach(obj => {
            let html = KKHtmlGenerator.databaseFactory(obj);
            resultsContainer.innerHTML += html;
        }) 
    }, renderWhoops: () => {
        resultsContainer.innerHTML = "";
        let html = KKHtmlGenerator.unknownFactory();
        resultsContainer.innerHTML += html;
    }

}