let data = require("./q1_json_data");

for(let i=0;i<data.length;i++){
    console.log(data[i].name);
}

console.log(`
-----------------------------------------------------
-----------------------------------------------------`);

for(let i in data){
    console.log(data[i].name);
}

console.log(`
-----------------------------------------------------
-----------------------------------------------------`);

for(let i of data){
    console.log(i.name);
}

console.log(`
-----------------------------------------------------
-----------------------------------------------------`);

data.forEach((i) => {
    console.log(i.name);
})