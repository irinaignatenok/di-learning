let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice (0, 1);
console.log (fruits);
 ["Apples", "Oranges", "Blueberries"]

fruits.sort();
 ["Apples", "Blueberries", "Oranges"]

fruits.push("Kiwi");
console.log(fruits);
 ["Apples", "Blueberries", "Oranges", "Kiwi"]

fruits.splice(0, 1);
["Apples"]
console.log(fruits);
["Blueberries", "Oranges", "Kiwi"]

fruits.reverse();
(3) ["Kiwi", "Oranges", "Blueberries"]

let array = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array[1][1];
["Oranges"]