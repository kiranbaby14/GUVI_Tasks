// Q3. Print the following details name, capital, flag using forEach function
let xhttp = new XMLHttpRequest();
let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json";

xhttp.onload = function(){
	let data = JSON.parse(this.response)	

    data.forEach((element) => {
		console.log(`
		Name: ${element.name}
		Capital: ${element.capital}
		Flag: ${element.flag}
		---------------------`); 
	});
	
	
}
xhttp.open("GET", url, true);
xhttp.send();


/*---------OUTPUT---------------

		Name: Afghanistan
		Capital: Kabul
		Flag: https://restcountries.eu/data/afg.svg
		---------------------
 
		Name: Åland Islands
		Capital: Mariehamn
		Flag: https://restcountries.eu/data/ala.svg
		---------------------
 
		Name: Albania
		Capital: Tirana
		Flag: https://restcountries.eu/data/alb.svg
		---------------------

        ...

*/