// Q4. Print the total population of countries using reduce function
let xhttp = new XMLHttpRequest();
let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json";

xhttp.onload = function(){
	let data = JSON.parse(this.response)	

	let sumPopulaion = data.reduce( (prev, element) => element.population + prev, 0);
	console.log(`sum of population is: ${sumPopulaion}`);
	
	
}
xhttp.open("GET", url, true);
xhttp.send();


/*---------OUTPUT---------------

    sum of population is: 7349137231

*/