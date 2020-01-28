const mainDom = document.querySelector('.mainDom');
mainDom.innerHTML +=
    `<nav class="navbar">
<h1>Welcome To Nashville</h1>
</nav>
<div class="searchDom">
<div  class="parks">
    <label for="park-search">Parks:</label>
    <input class="park-search" id="JM-input" placeholder="Parks Go Here!" type="text">
    <button type="button" id="JM-btn">Search!</button>
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
<footer class="foobar">
<h1>Thanks!<h1>
</footer>`


