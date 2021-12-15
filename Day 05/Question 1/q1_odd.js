let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd = arr.filter(function(num){
    return num%2 !== 0;
})
console.log(odd);

/*----------OUTPUT-------------

[ 1, 3, 5, 7, 9 ]

*/