1. Welcome, and welcome to 'Welcome Nashville'! 

This app was created to help you search through many of Nashville's great amenities. By clicking on the corresponding tab, you can search through Nashville's parks, restaurants, art installations, and upcoming concerts! You can save each result to your itinerary of places you want to go, and things you want to see and do. Have fun exploring the app and this cool city! Welcome to Nashville, and welcome to 'Welcome to Nashville'!

Bellow is a guide in how to install and use our application.


2. Download and start the app:

    a. Click the <span style="color: white; background-color: green; border-radius: 3px; padding: 5px">Clone or download</span> button in the upper right

    b. Copy the URL (or click the clipboard button)

    c. Run `git clone *URL*` in your terminal

    d. `cd` into the new directory 
    `welcome-to-nashville-the-major-crocs-m`

    e. `cd` into to `src/`

    f. Start `http-server -p 8080` (Download [http-server](https://github.com/http-party/http-server#readme) if not installed)
    
    g. Open `http://127.0.0.1:8080/` in your browser

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

