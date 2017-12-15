var underMenuItems = document.querySelectorAll(".under-menu-item");
var articles = document.querySelectorAll(".articles");

var lastCategoryIndex = 0;

for (var i = 0; i < underMenuItems.length; i++) {
	underMenuItems[i].addEventListener("mousedown", changeView.bind(null, i));
	underMenuItems[i].addEventListener("mouseover", addHoverEffect.bind(null, i));
	underMenuItems[i].addEventListener("mouseout", removeHoverEffect.bind(null, i));
}

function changeView(index) {
	underMenuItems[index].style.backgroundColor = "rgba(152, 139, 177, 0.5)";
	articles[index].classList.remove("hidden");

	if (!(index == lastCategoryIndex)) {
		articles[lastCategoryIndex].classList.add("hidden");
		underMenuItems[lastCategoryIndex].style.backgroundColor = "black";
	}

	lastCategoryIndex = index;
}

function addHoverEffect(index) {
	underMenuItems[index].style.backgroundColor = "rgba(152, 139, 177, 0.5)";
}

function removeHoverEffect(index) {
	if (!(index == lastCategoryIndex)){
		underMenuItems[index].style.backgroundColor = "black";
	}
	
}