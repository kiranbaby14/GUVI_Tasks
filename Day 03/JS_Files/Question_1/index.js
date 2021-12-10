let data = require("./json_data");

// For Loop
for(let i=0;i<data.length;i++){
    console.log(data[i].name);
}

console.log(`
-----------------------------------------------------
-----------------------------------------------------`);

// For in Loop
for(let i in data){
    console.log(data[i].name);
}

console.log(`
-----------------------------------------------------
-----------------------------------------------------`);

// For of Loop
for(let i of data){
    console.log(i.name);
}

console.log(`
-----------------------------------------------------
-----------------------------------------------------`);

// ForEach Loop
data.forEach((i) => {
    console.log(i.name);
})