var geraltPortrait = document.getElementById("geralt-portrait");
var ciriPortrait = document.getElementById("ciri-portrait");

var geraltProfile = document.getElementById("geralt-profile");
var ciriProfile = document.getElementById("ciri-profile");

var characters = [geraltPortrait, ciriPortrait];
var currentCharacter = geraltPortrait;
currentCharacter.style.filter = "none";

geraltPortrait.addEventListener("click", function () {
    currentCharacter = this;
    changeImgFilters();

    geraltProfile.style.display = "block";
    ciriProfile.style.display = "none";
});

ciriPortrait.addEventListener("click", function () {
    currentCharacter = this;
    changeImgFilters();

    ciriProfile.style.display = "block";
    geraltProfile.style.display = "none";
});

function changeImgFilters() {
    for (var i = 0; i < characters.length; i++) {
        if (characters[i] == currentCharacter) {
            currentCharacter.style.filter = "none";
        } else {
            characters[i].style.filter = "grayscale(100%) opacity(0.6)";
        }
    }
}
