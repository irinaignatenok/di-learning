let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", buttonRespondClick);
button.addEventListener("mouseover", RespondMouseOver);
button.addEventListener("mouseenter", mouseEnter);
button.addEventListener("mouseleave", mouseLeave);

function RespondMouseOver (e) {
	button.style.backgroundColor = "lightblue";
}
function buttonRespondClick (e) {
	alert("Hello");
}

function mouseEnter () {
	button.style.color="red";
	button.style.fontSize = "30px"
}
function mouseLeave () {
	button.style.color="black";
	button.style.fontSize = "15px"

}

