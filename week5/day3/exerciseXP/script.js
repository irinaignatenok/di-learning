// Exercise  xp part 1

function myMove () {
	let elem = document.getElementById("animate");
	let pos = 0;
	let id = setInterval(box, 5);
	function box() {
		if (pos ===350) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';

		}
	}
}
// Exercise XP part 2

let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");

square1.addEventListener("dragstart", dragStart);
square2.addEventListener("drop", drop);
square2.addEventListener("dragover", dragOver);
square2.addEventListener("dragenter", dragEnter);
square2.addEventListener("dragleave", dragLeave);

function dragStart(event) {
	event.dataTransfer.setData("text", event.target.id);

}

function dragOver(event) {
	event.preventDefault()
}
 function drop(event) {
 	event.preventDefault()
 	let data = event.dataTransfer.getData("text");
 	let box = document.getElementById(data)
 	event.target.appendChild(box);
 }

 function dragEnter(event) {
 	event.target.style.backgroundColor="green";
 }

function dragLeave (event) {
	event.target.style.backgroundColor="blue";

}



 