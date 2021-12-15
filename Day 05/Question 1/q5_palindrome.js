let arr = ['121', 'ball', 'aba'];
let palin = arr.filter(function(str){
    let rev = str.split('').reverse().join('');
    if(str === rev)
        return str;  
})
console.log(palin);

/*----------OUTPUT-------------

[ '121', 'aba' ]

*/