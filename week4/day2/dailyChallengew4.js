let allBooks = [{
	title: "Think and Grow Rich",
	author: "Napoleon Hill",
	image: "https://images-na.ssl-images-amazon.com/images/I/61y04z8SKEL._SX349_BO1,204,203,200_.jpg",
	alreadyRead: true
},{ 
	title: "The Law of Attraction",
	author: "Ester and Jerry Hicks",
	image: "https://images-na.ssl-images-amazon.com/images/I/81hnzqPsz0L.jpg",
	alreadyRead: false
}]

let jDiv = document.createElement("div");
let jTable = document.createElement("table");
let jRow = document.createElement("tr");


document.body.appendChild(jDiv);
jDiv.appendChild(jTable);
jTable.appendChild(jRow);

 for (x of allBooks) {
 	let tableData = document.createElement("td")
 	jRow.appendChild(tableData);
 	let jText = document.createTextNode(x.title + ' ' + 'written by' + ' ' +x.author);
 	tableData.appendChild(jText);
 	if (x.alreadyRead == true) {
 		tableData.setAttribute("style", "color:red");
 	}


 	tableData.setAttribute("align", "center");
 	// Why, if I add style again the if statemen Why if I put style one more time the if statement isn'tworking?t doesn't work?
 	var newBr = document.createElement('br');
    tableData.appendChild(newBr);
 	let imageBook = document.createElement("img");
 	tableData.appendChild(imageBook);
 	imageBook.setAttribute("src", x.image);
 	imageBook.setAttribute("style", "width:100px; height: 100px;");

 }