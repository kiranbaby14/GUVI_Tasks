var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {
  var t = JSON.parse(this.response);
  
  for(let i in t){
      console.log(`Name: ${t[i].name}`);
      console.log(`Region: ${t[i].region}`);
      console.log(`SubRegion: ${t[i].subregion}`);
      console.log(`Population: ${t[i].population}`);
      console.log("----------------------------");
  }
  
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};

xhr.send();




/* ------------------OUTPUT---------------------

Name: Yemen
Region: Asia
SubRegion: Western Asia
Population: 27478000
----------------------------
Name: Zambia
Region: Africa
SubRegion: Eastern Africa
Population: 15933883
----------------------------
Name: Zimbabwe
Region: Africa
SubRegion: Eastern Africa
Population: 14240168
----------------------------

........etc

*/
