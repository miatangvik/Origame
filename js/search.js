var searchIcon = document.getElementById("search-icn");
var searchScreen = document.getElementById("search");
var searchInput = document.getElementById("search-input")
var isVisible = false;

searchIcon.addEventListener("click", function() {
    if (isVisible) {
        searchScreen.classList.add("hidden");
        isVisible = false;
    } else {
        searchScreen.classList.remove("hidden");
        searchInput.focus();
        isVisible = true;
    } 
});