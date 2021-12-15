let arr = [1, 1, 2, 3, 4, 5, 5, 1];
let rmDuplicate = arr.filter(function(value, index){
    return arr.indexOf(value) == index ;
});

console.log(rmDuplicate);

/*----------OUTPUT-------------

[ 1, 2, 3, 4, 5 ]

*/