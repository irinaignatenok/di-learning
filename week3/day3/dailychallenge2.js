// 1//

let arr = [5,0,9,1,7,4,2,6,3,8];

function bubbleSort(arr) { for (let j=0; j<arr.length; j++) { 
    for(let i=0; i<arr.length; i++) { 
        if (arr[i]<arr[i+1]) { 
            let temp = arr[i]; 
            arr[i] = arr[i+1]; 
            arr[i+1] = temp;
        }
    }
}
 return arr; }
 console.log(bubbleSort(arr));
 [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

//  1.1

let a = 9;
let b = 8;
let temp;
 temp = a;
 a = b; 
 b = temp;
 a;
8
b;
9
// 1.2

function multiplyAll(arr) { 
    let product = 1;
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length; j++){
            product*=arr[j];
        }
    }
    return product;
}
// 2
let arr = [5,0,9,1,7,4,2,6,3,8];
arr.toString();
"5,0,9,1,7,4,2,6,3,8"

// 3
let arr = [5,0,9,1,7,4,2,6,3,8];
arr.join("+")
"5+0+9+1+7+4+2+6+3+8"
arr.join(" ")
"5 0 9 1 7 4 2 6 3 8"
arr.join("")
"5091742638"
