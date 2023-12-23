//  - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

let array=[3,4,5,6,7,8,9,-3,-4,-5];

array=array.filter(function(x){
    return x >-1
});

console.log(array);