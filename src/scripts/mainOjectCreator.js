const objectCreator = {
    createObjectFromID: (id) => {
        const obj= {
            "name": document.getElementById(`name-${id}`).innerHTML,
            "address":document.getElementById(`address-${id}`).innerHTML
        }
        //switch to databaseUploadAPIManager.js
        return DbAPI.postDataToAPI(obj);
    }
}