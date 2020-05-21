let input = document.getElementById("letters");
 
input.addEventListener("keyup", function(event) {
	let key = event.keyCode;
	console.log(key);
	if (key <65 || key >90){
		input.value = input.value.replace(event.key, "");
	}
})

