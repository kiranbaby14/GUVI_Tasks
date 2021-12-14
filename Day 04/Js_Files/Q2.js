var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {
  var t = JSON.parse(this.response);
  
  for(let i in t){
      console.log(t[i].flag);
  }
  
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};

xhr.send();


/* ------------------OUTPUT----------------

https://restcountries.eu/data/uga.svg
https://restcountries.eu/data/ukr.svg
https://restcountries.eu/data/are.svg
https://restcountries.eu/data/gbr.svg
https://restcountries.eu/data/usa.svg
https://restcountries.eu/data/ury.svg
https://restcountries.eu/data/uzb.svg
https://restcountries.eu/data/vut.svg
https://restcountries.eu/data/ven.svg
https://restcountries.eu/data/vnm.svg
https://restcountries.eu/data/wlf.svg
https://restcountries.eu/data/esh.svg
https://restcountries.eu/data/yem.svg
https://restcountries.eu/data/zmb.svg
.......etc

*/