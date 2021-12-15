let arr1 = [1, 5, 8];
let arr2 = [2, 4, 6];

let pushArray = function(){
    for(i of arr2){
        arr1.push(i);
    }       
}


let mergeArray = function(){
    arr1 = arr1.sort(function(a, b){
        return a-b;
    });
}

let median = function(){
    if(arr1.length%2 !== 0){
        return "Sorry array sizes must be the same";
    }
    else{
        
        let righttMidIndex = arr1.length/2;
        let leftMidIndex = righttMidIndex - 1;
        let midIndexValue = (arr1[leftMidIndex] + arr1[righttMidIndex])/2;
        return midIndexValue;
    }
}

pushArray();
mergeArray();
console.log("Median: ", median());

/*----------OUTPUT-------------

Median:  4.5

*/