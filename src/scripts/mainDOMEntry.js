const mainDom = document.querySelector('.mainDom');
mainDom.innerHTML +=
    `<nav class="navbar">
        <h1>Welcome To Nashville</h1>
    </nav>

    <div class="searchDom">
        <div  class="parks">
            <label for="park-search">Parks:</label>
            <select class="park-search" id="JAM-select">
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

        <div  class="concerts">
            <label for="concert-search">Concerts:</label>
            <input class="concert-search" id="BM-input" placeholder="Concerts Go Here!" type="text">
            <button type="button" id="BM-btn">Search!</button>
        </div>
        <div  class="arts">
            <label for="art-search">Art:</label>
            <input class="art-search" id="TS-input" placeholder="Art Search" type="text">
            <button type="button" id="TS-btn">Search!</button>
        </div>
        <div  class="restaurant">
            <label for="restaurant-search">Restaurants:</label>
            <input class="restaurant-search" id="KK-input" placeholder="Restaurants Go Here!" type="text">
            <button type="button" id="KK-btn">Search!</button>
        </div>
    </div>

    <div id="results-container">
    </div>

    <div id="itinerary">
    </div>

<footer class="foobar">
<h1>Thanks!<h1>
</footer>`


