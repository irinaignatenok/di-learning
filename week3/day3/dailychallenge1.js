let str = "This apartment is not so bad"
let not = str.indexOf("not");

let bad = str.indexOf("bad");

if (not < bad) {
    str.replace("not so bad", "good");
} else {
    console.log(str);
}
"This apartment is good"