// Basic 1
let x = [];
x.push("coding","dojo","rocks");
x.pop();
console.log(x);

// Basic 2 
const y = []; 
y.push(88); 
console.log(y);

// Basic 3 
let z = [9,10,6,5,-1,20,13,2]; 
for (i = 0; i < z.length; i++){ 
    console.log(z[i]);
}
let z = [9,10,6,5,-1,20,13,2]; 
for (i = 0; i < z.length-1; i++){ 
    console.log(z[i]);
}

// Basic 4 
let names = ['Kapiolani', 'William', 'Ricardo', 'Jeff']; 
for (var i = 0; i< names.length; i++){
    console.log(names[i].length);
}



// Basic 5 
let yell = "these words are lower case"


scream = yell.toUpperCase();

console.log(scream);