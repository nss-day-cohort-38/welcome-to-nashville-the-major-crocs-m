const restaurantInputField = document.querySelector('#KK-input');
const KKUserInput ={
   getUserInput: () => {
       const userInput = restaurantInputField.value; 
       const allLower = userInput.toLowerCase();
       const capitolizedInput = allLower.charAt(0).toUpperCase() + allLower.slice(1);
    //    console.log(capitolizedInput);
    API.searchForCuisineID(capitolizedInput);

   }
}