var sections = document.querySelectorAll("section");
var menuIcons = document.querySelectorAll(".menu-icon");

var outlinedMenuIcons = [];

for (var i = 0; i < 5; i++) {
	outlinedMenuIcons[i] = new Image();
}

outlinedMenuIcons[0].src = "img/witcher/side-menu/outline/main_line.png";
outlinedMenuIcons[1].src = "img/witcher/side-menu/outline/intro_line.png";
outlinedMenuIcons[2].src = "img/witcher/side-menu/outline/character_line.png";
outlinedMenuIcons[3].src = "img/witcher/side-menu/outline/techno_line.png";
outlinedMenuIcons[4].src = "img/witcher/side-menu/outline/reviews_line.png";

var filledMenuIcons = [];

for (var i = 0; i < 5; i++) {
	filledMenuIcons[i] = new Image();
}

filledMenuIcons[0].src = "img/witcher/side-menu/utfylt/main_fylt.png";
filledMenuIcons[1].src = "img/witcher/side-menu/utfylt/info_fylt.png";
filledMenuIcons[2].src = "img/witcher/side-menu/utfylt/character_fylt.png";
filledMenuIcons[3].src = "img/witcher/side-menu/utfylt/techno_fylt.png";
filledMenuIcons[4].src = "img/witcher/side-menu/utfylt/review_fylt.png";

for (var i = 0; i < menuIcons.length; i++) {
	menuIcons[i].addEventListener("click", listener.bind(null, i));
}

function listener(index) {
	if (!menuIcons[index].classList.contains("filled")) {
		for (var i = 0; i < index + 1; i++) {
			menuIcons[i].classList.add("filled");
			menuIcons[i].src = filledMenuIcons[i].src;

			sections[i].scrollIntoView({
				behavior: "smooth"
			});
		}
	} else {
		for (var i = 4; i > index; i--) {
			menuIcons[i].classList.remove("filled");
			menuIcons[i].src = outlinedMenuIcons[i].src;

			sections[i - 1].scrollIntoView({
				behavior: "smooth"
			});
		}
	}
}
