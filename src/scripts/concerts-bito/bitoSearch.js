const concertInputField = document.getElementById("BM-input");
   getUserInput: () => {
       const userInput = concertInputField.value; 
       const allLower = userInput.toLowerCase();
       const capitolizedInput = allLower.charAt(0).toUpperCase() + allLower.slice(1);
    //    console.log(capitolizedInput);
    grabTicketMaster(capitolizedInput);

   }