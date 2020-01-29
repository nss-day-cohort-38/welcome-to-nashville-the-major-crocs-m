const dbURL = `http://localhost:8088/Itenerary_Items`;
const DbAPI = {
    getItenerary: () => {
        return fetch(dbURL).then(r=>r.json())
        
    },
    postDataToAPI: (obj) => {
        fetch(dbURL, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(obj)
        }
        ).then(r=>r.json())
    }
}