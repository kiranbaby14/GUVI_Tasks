let arr = [1, 2, 3, 4, 5, 6]
let rotate = function(array, k){
    let temp = [];
    let len = array.length;
    let i = 0;
    k = k % len;
    while(i<len){
        temp[(i+k)%len] = array[i];
        i++;
    }
    return temp;
}

console.log(rotate(arr, 4));


/*----------OUTPUT-------------

[ 3, 4, 5, 6, 1, 2 ]

*/