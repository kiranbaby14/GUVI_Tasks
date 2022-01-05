// Q1. Get all the countries from Asia continent /region using Filter function
let xhttp = new XMLHttpRequest();
let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json";

xhttp.onload = function(){
	let data = JSON.parse(this.response)	
	let reg = data.filter( element => element.region === "Asia");
    reg.forEach(ele => {
        console.log(ele.name);
    });
	
	
}
xhttp.open("GET", url, true);
xhttp.send();


/*---------OUTPUT ---------------

        Afghanistan
        Armenia
        Azerbaijan
        Bahrain
        Bangladesh
        Bhutan
        Brunei Darussalam
        Cambodia
        China
        Georgia
        Hong Kong
        India
        Indonesia
        Iran (Islamic Republic of)
        Iraq
        Israel
        ...

*/