let Spoiler = document.querySelector("#spoiler");
let spoilerButton = document.querySelector("#buttonSpoiler");
let jokerSwitchs = document.querySelectorAll(".joker-switch");
let jokerImg = document.querySelector(".joker-img");
let bioJoker = document.querySelector(".bio-joker");
let skullSwitchs = document.querySelectorAll(".skull-switch");
let skullImg = document.querySelector(".skull-img");
let bioSkull = document.querySelector(".bio-skull");
let monaSwitchs = document.querySelectorAll(".mona-switch");
let monaImg = document.querySelector(".mona-img");
let bioMona = document.querySelector(".bio-mona");
let pantherSwitchs = document.querySelectorAll(".panther-switch");
let pantherImg = document.querySelector(".panther-img");
let bioPanther = document.querySelector(".bio-panther");
let foxSwitchs = document.querySelectorAll(".fox-switch");
let foxImg = document.querySelector(".fox-img");
let bioFox = document.querySelector(".bio-fox");
let queenSwitchs = document.querySelectorAll(".queen-switch");
let queenImg = document.querySelector(".queen-img");
let bioQueen = document.querySelector(".bio-queen");
let oracleSwitchs = document.querySelectorAll(".oracle-switch");
let oracleImg = document.querySelector(".oracle-img");
let bioOracle = document.querySelector(".bio-oracle");
let noirSwitchs = document.querySelectorAll(".noir-switch");
let noirImg = document.querySelector(".noir-img");
let bioNoir = document.querySelector(".bio-noir");


function init() {
spoilerButton.addEventListener('click', function(){
		Spoiler.classList.toggle("hide");
})
	for (let jokerSwitch of jokerSwitchs) {
		jokerSwitch.addEventListener('click', function () {
			jokerImg.classList.toggle("hide");
			bioJoker.classList.toggle("hide");
		})
	}
	for (let skullSwitch of skullSwitchs) {
		skullSwitch.addEventListener('click', function () {
			skullImg.classList.toggle("hide");
			bioSkull.classList.toggle("hide");
		})
	}
	for (let monaSwitch of monaSwitchs) {
		monaSwitch.addEventListener('click', function () {
			monaImg.classList.toggle("hide");
			bioMona.classList.toggle("hide");
		})
	}
	for (let pantherSwitch of pantherSwitchs) {
		pantherSwitch.addEventListener('click', function () {
			pantherImg.classList.toggle("hide");
			bioPanther.classList.toggle("hide");
		})
	}
	for (let foxSwitch of foxSwitchs) {
		foxSwitch.addEventListener('click', function () {
			foxImg.classList.toggle("hide");
			bioFox.classList.toggle("hide");
		})
	}
	for (let queenSwitch of queenSwitchs) {
		queenSwitch.addEventListener('click', function () {
			queenImg.classList.toggle("hide");
			bioQueen.classList.toggle("hide");
		})
	}
	for (let oracleSwitch of oracleSwitchs) {
		oracleSwitch.addEventListener('click', function () {
			oracleImg.classList.toggle("hide");
			bioOracle.classList.toggle("hide");
		})
	}
	for (let noirSwitch of noirSwitchs) {
		noirSwitch.addEventListener('click', function () {
			noirImg.classList.toggle("hide");
			bioNoir.classList.toggle("hide");
		})
	}
}

init();