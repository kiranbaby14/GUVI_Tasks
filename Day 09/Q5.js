// Q5. Print the country which uses US Dollars as currency.
let xhttp = new XMLHttpRequest();
let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json";

xhttp.onload = function(){
	let data = JSON.parse(this.response)	

	let currency = data.filter(element => element.currencies[0].code === 'USD');
	currency.forEach(ele => {
        console.log(ele.name);
    });
	
}
xhttp.open("GET", url, true);
xhttp.send();


/*---------OUTPUT---------------

    American Samoa
    Bonaire, Sint Eustatius and Saba
    British Indian Ocean Territory
    United States Minor Outlying Islands
    Virgin Islands (U.S.)
    Ecuador
    El Salvador
    Guam
    Marshall Islands
    Northern Mariana Islands
    Puerto Rico
    Timor-Leste
    Turks and Caicos Islands
    United States of America

*/