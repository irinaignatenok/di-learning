let ans = prompt("tell me the word").split('');
let letters_count = {};
for (let i = 0; i < ans.length; i++) {
    if (letters_count[ans[i]] == undefined)
    letters_count[ans[i]] = 0;
    letters_count[ans[i]]++;

}
for (let i in letters_count)
{ 
    console.log(i + '='+ letters_count[i]);
}

k=1
i=1
n=2
d=1
e=1
s=2

