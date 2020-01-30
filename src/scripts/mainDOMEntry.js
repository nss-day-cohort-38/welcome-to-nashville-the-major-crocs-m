const mainDom = document.querySelector('.mainDom');
mainDom.innerHTML +=
    `<nav class="navbar">
        <h1>Welcome To Nashville</h1>
    </nav>
    
    <div class="searchDom_Container">
        <div id='tabs'>
            <button type='button' class='navTab' id=concertTab>Search Concerts</button>
            <button type='button' class='navTab' id=artTab>Search Art Installations</button>
            <button type='button' class='navTab' id=restaurantTab>Search Restaurants</button>
            <button type='button' class='navTab' id=parkTab>Search Nashville Parks</button>
            <button id="see_itenerary" type="button">View My Itenerary</button>
        </div>
        <div class="searchDom">
            <div  id='parkSearch' class="parks hidden">
                <label for="park-search">Parks:</label>
                <select class="park-search" id="JAM-select" placeholder="Parks Features">
                    <option value="" selected disabled hidden>Select Park Feature</option>
                    <option value="community_center">Community Center</option>
                    <option value="nature_center">Nature Center</option>
                    <option value="playground">Playground</option>
                    <option value="picnic_shelters">Picnic Shelters</option>
                    <option value="restrooms_available">Restrooms Available</option>
                    <option value="ada_accessible">ADA Accessible</option>
                    <option value="dog_park">Dog Park</option>
                    <option value="baseball_fields">Baseball Fields</option>
                    <option value="basketball_courts">Basketball Courts</option>
                    <option value="disc_golf">Disc Golf</option>
                    <option value="golf_course">Golf Course</option>
                    <option value="hiking_trails">Hiking Trails</option>
                    <option value="horse_trails">Horse Trails</option>
                    <option value="mountain_bike_trails">Mountain Bike Trails</option>
                    <option value="canoe_launch">Canoe Launch</option>
                    <option value="boat_launch">Boat Launch</option>
                </select>
                <button type="button" id="JAM-btn">Search!</button>
            </div>
            <div id='concertSearch' class="concerts hidden">
                <label for="concert-search">Concerts:</label>
                <input class="concert-search" id="BM-input" placeholder="Search Genre Here!" type="text">
                <button type="button" id="BM-btn">Search!</button>
            </div>
            <div id='artSearch' class="arts hidden">
                <label for="art-search">Artwork:</label>
                <select class="art-search" id="ts-select" placeholder="Artworks">
                    <option value="" selected disabled hidden>Select Artwork Feature</option>
                    <option value="4743 REASONs">4743 REASONs</option>
                    <option value="Adanedi">Adanedi</option>
                    <option value="Adjusting the Perspective">Adjusting the Perspective</option>
                    <option value="Afternoon Light, Arcade">Afternoon Light, Arcade</option>
                    <option value="Aileron">Aileron</option>
                    <option value="Air Wave">Air Wave</option>
                    <option value="Anchor in the Storm">Anchor in the Storm</option>
                    <option value="A Place to Gather Crowd">A Place to Gather Crowd</option>
                    <option value="Are We There Yet?">Are We There Yet?</option>
                    <option value="B.024.02">B.024.02</option>
                    <option value="Banjo">Banjo</option>
                    <option value="Bee Cycle">Bee Cycle</option>
                    <option value="Bellevue Bench Mark">Bellevue Bench Mark</option>
                    <option value="Bicycle Copse">Bicycle Copse</option>
                    <option value="Bling">Bling</option>
                </select>
                <button type="button" id="TS-btn">Search!</button>
                <button type="button" id="show-all">Show All</button>
            </div>
            <div id='restaurantSearch' class="restaurant hidden">
                <label for="restaurant-search">Restaurants:</label>
                <input class="restaurant-search" id="KK-input" placeholder="Restaurants Go Here!" type="text">
                <button type="button" id="KK-btn">Search!</button>
            </div>
        </div>
    </div>
    <div id="header-container">
    <h2>Search Results</h2>
    <h2>Itinerary</h2>
    </div>

    <div id="container">
        <div id="results-container" class="hide">
        </div>

        <div id="itinerary" class="hide">
        </div>
    </div>

<footer class="foobar">
<h1>Thanks!<h1>
</footer>`