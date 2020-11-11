let Spoiler = document.querySelector("#spoiler");
let spoilerButton = document.querySelector("#buttonSpoiler");

function init() {
spoilerButton.addEventListener('click', function(){
		Spoiler.classList.remove("hide");
})
}

init();