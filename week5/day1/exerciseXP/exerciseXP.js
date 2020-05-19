// Give to all paragraphs inside the article tag the class para_article

let newP = document.getElementsByTagName("p");
 newP.className = "para_artickle";

 // Remove the last paragraph in the article.
let newStart = document.body.children[0];
let lastStart = newStart.lastElementChild;
lastStart.remove();

// Add an event listener so that when you click on the h2, it is removed from the DOM.	
	
let newArt = document.body.children[0];
let newChild = newArt.children[1];
newChild.addEventListener("click", RespondClick);


function RespondClick() {
	newChild.remove()
}	

// Set the font size of the h1 to be a random pixel size from 0 to 100.

let elem = document.body.children[0];
let new_child = elem.children[0];
function myFunction() {
new_child.style.fontSize = Math.floor(Math.random() * 101) + "px";
}
 myFunction()

 // Hide the 1st paragraph, when it’s clicked


 let newElem = document.body.children[0];
let nextElem = newElem.children[1];
let neededElem = nextElem.nextSibling;

let elem = document.getElementsByTagName("p")[0];
elem.addEventListener("click", RespondClick);


function RespondClick() {
	elem.style.visibility = "hidden";
}

 	// Fade out the 2nd paragraph over 2000 milliseconds, when it’s clicked
let elem = document.getElementsByTagName("p")[1];
elem.addEventListener("click", RespondClick);


function RespondClick() {
	document.getElementsByTagName("p")[1].fadeOut();
};

// Get the value in the inputs and append it to the end of the html, inside a table

  let button = document.getElementById("enter");
  let input = document.getElementById("userinput");
  let input_next = document.getElementById("nextinput");
  let new_table = document.createElement("table");
let new_row = document.createElement("tr");
document.body.appendChild(new_table);
new_table.appendChild(new_row);

new_table.setAttribute("style", "border: 3px solid black;")
new_table.style.width= "200px";
new_table.style.height= "30px";

function createListElement() {
	let tableData = document.createElement("td"); 
  		let table_data = document.createElement("td"); 
  		tableData.appendChild(document.createTextNode(input.value));
  		new_row.appendChild(tableData);
  		table_data.appendChild(document.createTextNode(input_next.value));
  		new_row.appendChild(table_data);
  		
  		input.value = ""; 
  		input_next.value ="";
  	}


  function addListAfterClick() {
  	if (input.value.length>0 && input_next.value.length > 0) {
  		createListElement();
  		
  	}
  }
button.addEventListener ("click", addListAfterClick);









