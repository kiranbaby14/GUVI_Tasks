// Q2. Get all the countries with a population of less than 2 lakhs using Filter function
let xhttp = new XMLHttpRequest();
let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json";

xhttp.onload = function(){
	let data = JSON.parse(this.response)	
	
	let result = data.filter( element => element.population < 200000);
    result.forEach(ele => console.log(ele.name))
	console.log(result);
	
	
}
xhttp.open("GET", url, true);
xhttp.send();


/*---------OUTPUT ---------------

    Åland Islands
    American Samoa
    Andorra
    Anguilla
    Antarctica
    Antigua and Barbuda
    Aruba
    Bermuda
    Bonaire, Sint Eustatius and Saba
    Bouvet Island
    British Indian Ocean Territory
    United States Minor Outlying Islands
    Virgin Islands (British)
    Virgin Islands (U.S.)
    ...

*/