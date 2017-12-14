var searchIcon = document.getElementById("search-icn");
var searchScreen = document.getElementById("search");
var searchInput = document.getElementById("search-input")
var isVisible = false;

searchIcon.addEventListener("click", function() {
    if (isVisible) {
        searchScreen.style.display = "none";
        isVisible = false;
    } else {
        searchScreen.style.display = "block";
        searchInput.focus();
        isVisible = true;
    } 
});