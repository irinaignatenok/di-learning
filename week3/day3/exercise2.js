// Exercise 1
let colors = ["pink", "blue", "green", "purple"];
console.log("My 1st choise is pink")
VM218:1 My 1st choise is pink

console.log("My 2st choise is blue")
VM233:1 My 2st choise is blue

console.log("My 3rd choise is green")
VM257:1 My 3rd choise is green

console.log("My 4th choise is purple")
VM277:1 My 4th choise is purple

//Exercise 2
let number = prompt("please tell me the number");
if (number < 10) {
    prompt ("please tell me a new number");
}
// Exercise 3
// 3.1
var people = ["Greg", "Mary", "Devon", "James"];
for (let i of people) {
    console.log(i);
}
 Greg
 Mary
 Devon
 James
 console.log("Greg")
VM659:1 Greg
 console.log("Mary")
VM762:1 Mary

console.log("Devon")
VM776:1 Devon

console.log("James")
VM789:1 James
// 3.2
var people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people)
VM860:1 (3) ["Mary", "Devon", "James"]

// 3.3
var people = ["Greg", "Mary", "Devon", "James"];
people[3] = "Jason"
console.log(people)
VM890:1 (4) ["Mary", "Devon", "James", "Jason"]

// 3.4
people.push("Irina")
console.log(people)
VM924:1 (5) ["Mary", "Devon", "James", "Jason", "Irina"]

// 3.5
for(let i of people) {
    console.log(i);}
VM1042:2 Mary
VM1042:2 Devon
VM1042:2 James
VM1042:2 Jason
VM1042:2 Irina

// 3.6
people.slice (1)
(4) ["Devon", "James", "Jason", "Irina"]

// 3.7
let pos = people.indexOf("Mary");
undefined
console.log(pos)
 0

//  3.8
let pos = people.indexOf("Foo");
undefined
console.log(pos)
 -1
//  3.9
let last_element = people[people.length - 1];
undefined
console.log(last_element)
 Irina

 // Exercise 4
 var age = [20,5,12,43,98,55];

 let a = [20,5,12,43,98,55];
 undefined
 let sum = a.reduce(function(a, b) {return a+b; }, 0)
 undefined
 console.log(sum)
  233

  // 4.2
  var age = [20,5,12,43,98,55];
  b = [];
  for ( let i = 0; i< age.length; ++i) {
    if ((age[i]%2) === 0) {
    b.push (age[i]);
}
}
console.log (b)
 [20, 12, 98]

// 4.3
var age = [20,5,12,43,98,55];
console.log(Math.max(20,5,12,43,98,55));
 98