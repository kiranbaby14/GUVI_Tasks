// Q. Solving problems using array functions on rest countries data.

let XMLHttpRequest = require('xhr2');
let xhttp = new XMLHttpRequest();
let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json";

xhttp.onload = function(){
	let data = JSON.parse(this.response)

//---------------------------------------------------------------------------------------------------
	
	// a. Get all the countries from Asia continent /region using Filter function
	let reg = data.filter( element => element.region === "Asia");
	console.log(reg);

	/*---------OUTPUT (a)---------------

	{
		name: 'Mongolia',
		topLevelDomain: [ '.mn' ],
		alpha2Code: 'MN',
		alpha3Code: 'MNG',
		callingCodes: [ '976' ],
		capital: 'Ulan Bator',
		altSpellings: [ 'MN' ],
		region: 'Asia',
		..........

	*/

//---------------------------------------------------------------------------------------------------
	
	// b. Get all the countries with a population of less than 2 lakhs using Filter function
	let result2 = data.filter( element => element.population < 200000);
	console.log(result2);

	/*---------OUTPUT (b)---------------

		.....
		region: 'Oceania',
		subregion: 'Micronesia',
		population: 10084,
		.....

	*/

//---------------------------------------------------------------------------------------------------
	
	// c. Print the following details name, capital, flag using forEach function
	data.forEach((element) => {
		console.log(`
		Name: ${element.name}
		Capital: ${element.capital}
		Flag: ${element.flag}
		---------------------`); 
	});

	/*---------OUTPUT (c)---------------

		.....
		Name: Zambia
		Capital: Lusaka
		Flag: https://restcountries.eu/data/zmb.svg
		---------------------

		Name: Zimbabwe
		Capital: Harare
		Flag: https://restcountries.eu/data/zwe.svg
		---------------------
		......

	*/
	
//---------------------------------------------------------------------------------------------------

	// d. Print the total population of countries using reduce function
	let sumPopulaion = data.reduce( (prev, element) => element.population + prev, 0);
	console.log(`sum of population is: ${sumPopulaion}`);

	/*---------OUTPUT (d)---------------

		sum of population is: 7349137231

	*/



//---------------------------------------------------------------------------------------------------
	
	// e. Print the country which uses US Dollars as currency.
	let currency = data.filter(element => element.currencies[0].code === 'USD');
	console.log(currency);


	/*---------OUTPUT (e)---------------

	  .....
	  {
	    name: 'American Samoa',
	    topLevelDomain: [ '.as' ],
	    alpha2Code: 'AS',
	    alpha3Code: 'ASM',
	    callingCodes: [ '1684' ],
	  .......
	
	*/

}
xhttp.open("GET", url, true);
xhttp.send();

