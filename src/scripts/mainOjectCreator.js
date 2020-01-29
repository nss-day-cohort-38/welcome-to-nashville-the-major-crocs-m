const objectCreator = {
    createObjectFromID: (id) => {
        const obj= {
            "name": document.getElementById(`name-${id}`).innerHTML,
            "address":document.getElementById(`address-${id}`).innerHTML
        }
        return DbAPI.postDataToAPI(obj);
    }
}