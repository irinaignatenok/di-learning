   var libButton = document.getElementById('lib-button');
        var libIt = function() {
 let inputOne  = document.forms[0].elements[0].value;
let inputTwo = document.forms[0].elements[1].value;
let inputThree = document.forms[0].elements[2].value;       


 var storyDiv = document.getElementById("story");
 storyDiv.innerHTML = "Please tell me about " +inputThree+ ". Does he/she has "+inputOne+ ". It was very "+inputTwo+"";
        };
 libButton.addEventListener('click', libIt);



