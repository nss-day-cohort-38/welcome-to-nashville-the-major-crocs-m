1. 

2. ### Download and start the app:
1. Click the <span style="color: white; background-color: green; border-radius: 3px; padding: 5px">Clone or download</span> button in the upper right
1. Copy the URL (or click the clipboard button)
1. Run `git clone *URL*` in your terminal
1. `cd` into the new directory `welcome-to-nashville-the-major-crocs-m`
1. `cd` into to `src/`
1. Start `http-server -p 8080` (Download [http-server](https://github.com/http-party/http-server#readme) if not installed)
1. Open `http://127.0.0.1:8080/` in your browser

3. API Keys
    a. Create a file within the general Script directory called `APIKeys.js`
    b. within this folder copy this code...
    `
    const APIKeys = {
    "parks": "",
    "restaurants": "",
    "art": "",       
    "concerts": ""
    }
    `
    c. Now you need to get keys from both ticketmaster and zomato (links at bottom);
    d. add the ticketmaster key to the "concerts" value in the APIKeys and the zomato key to the "restaurants" value.
    e. ticketmaster link :https://developer-acct.ticketmaster.com/user/register
    f.zomato link: https://developers.zomato.com/api

4. Install JSON
    a. cd into API subdirectory of src directory & start the JSON
    server with this code...

    json-server -p 8088 -w db.json 

    b. Make sure the port is 8088







<!-- Stretchiest Goals
Add an affordance to finalize an itinerary, and start a new one.
Add ability to view one or all of the itineraries
Instead of displaying all the search fields, search results, and itinerary list at the same time, add a nav bar or other feature(s) for hiding/showing what the user wants to view -->
