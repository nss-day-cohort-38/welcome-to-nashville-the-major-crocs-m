const restaurantInputField = document.querySelector('#KK-input');
const KKUserInput ={
    searchForCuisine: ()=> {
        const userInput = restaurantInputField.value;
        return userInput;
    }
}