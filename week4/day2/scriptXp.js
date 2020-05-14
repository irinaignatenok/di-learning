// Exercise 1
// part 1  Use the setAttribute method to change the value of the 
// identity attribute (id) 
// from navBar to socialNetworkNavigation.
// Part 2.  Create a new element of type li. Create a new 
// text node with the contents “Logout.” Append the text 
// node to the newly created list node. Finally, append this 
// updated list node to the unordered list using the 
// appendChild method.
let oldId = document.getElementById('navBar');
oldId.getAttribute('id');
 oldId.setAttribute('id', 'socialNetworkNavigation');

 console.log(oldId);

// part 2
let div = document.body.children[0];
let ul = div.children[0];
function myFunction() {
	var node = document.createElement("li");
  var textnode = document.createTextNode("Logout");
  node.appendChild(textnode);
  ul.appendChild(node);
}
 myFunction() 

 // Exercise 2
//  indexXP2.html
//  Change the name “Pete” by “Richard”
// Change each first name of the <ul> by your name
// Add add the end of each <ul>, a paragraph that says “Hey students”
// Delete the <li> Sarah
 // part1
 let elem = document.getElementsByTagName('li')[1].innerHTML = "Richard";
//  part 2
let elements = document.querySelectorAll('ul > li:first-child');
for (let elem of elements) {
elem.innerHTML = "Irina";
 }
 // part 3

 let elem1 = document.body.children[1];
 function myFunction() {
var node = document.createElement("p");
  var textnode = document.createTextNode("Hey guys");
  node.appendChild(textnode);
  elem1.appendChild(node);
}
 myFunction()

  let elem2 = document.body.children[2];
 function myFunction() {
var node = document.createElement("p");
  var textnode = document.createTextNode("Hey guys");
  node.appendChild(textnode);
  elem2.appendChild(node);
}
 myFunction()
 
// How to add <p> to each <ul> within the one function?
// I tried to getElementsByTagName("ul") but after I could not append <p>


// part 3 
let parentElem = document.getElementsByClassName('list')[1];
 let childElement = parentElem.getElementsByTagName("li")[1];
 parentElem.removeChild(childElement);
  



