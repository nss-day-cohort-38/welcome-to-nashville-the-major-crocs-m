1. 

2. 

3. API Keys
    a. Create a file within the general Script directory called `APIKeys.js`
    b. within this folder copy this code...
    `
    const APIKeys = {
    "parks": "",
    "restaurants": "",
    "art": "",       
    "concerts": ""
    `
    c. Now you need to get keys from both ticketmaster and zomato (links at bottom);
}

4. Install JSON
    a. cd into API subdirectory of src directory & start the JSON
    server with this code...

    json-server -p 8088 -w db.json 

    b. Make sure the port is 8088







<!-- Stretchiest Goals
Add an affordance to finalize an itinerary, and start a new one.
Add ability to view one or all of the itineraries
Instead of displaying all the search fields, search results, and itinerary list at the same time, add a nav bar or other feature(s) for hiding/showing what the user wants to view -->
