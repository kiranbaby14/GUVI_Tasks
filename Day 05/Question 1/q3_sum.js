let arr = [1, 2, 3, 4, 5, 6, 7];
let sum = arr.reduce(function(num1, num2){
    return num1+num2;
});
console.log(`sum: ${sum}`);

/*----------OUTPUT-------------

sum: 28

*/