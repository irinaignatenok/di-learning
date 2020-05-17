function insert (num) {
	document.form.textview.value = document.form.textview.value+num;
}

function reset () {
	document.form.textview.value="";
}

function clean () {
	let elem = document.form.textview.value;
	document.form.textview.value=elem.substring(0, elem.length-1);

}


function equal () {
	let elem = document.form.textview.value;
	if(elem) {
		document.form.textview.value = eval(elem)
	}
}







