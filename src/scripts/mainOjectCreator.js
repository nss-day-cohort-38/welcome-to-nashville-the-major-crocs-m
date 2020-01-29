const objectCreator = {
    createObjectFromID: (id) => {
        const obj= {
            "name": document.getElementById(`name-${id}`).innerHTML,
            "address":document.getElementById(`address-${id}`).innerHTML
        }
        console.log(obj["name"]);
        DbAPI.postDataToAPI(obj);
        
    }
}