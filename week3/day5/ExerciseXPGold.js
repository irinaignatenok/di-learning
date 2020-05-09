// Exercise 1

let number = [0, -1, 4];
let order = number.sort();
let reverse = order.reverse();
if (number == reverse) {
    alert ([4, 0, -1]);
}

// Exercise 2
let numbers = [3, -7, 2];
let x = numbers.toString();
let res = x.slice(2,3);
console.log(res)
 -
 if (x > res) {
    alert(res);

    or

    for(let x in numbers) {
        sum +=numbers[x];} 
            if(sum < 0); {console.log(alert("the sign is -"))}
}

// Exercise 3
let grades = {
    david:  80,
    vinoth: 77,
    divya: 88,
    ishitha: 95,
    thomas: 68,
    lea: 77
}
let sum = 0;
for (let x in grades) {
    sum += grades[x];
}
485alert
var avg = 485/6
console.log(avg);
 80.83333333333333
//  3.1

let max = Math.max.apply(null, Object.values(grades));
console.log(max);
 95