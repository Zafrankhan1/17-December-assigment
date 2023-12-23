//  - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

let arrayNames=['Arsalan','Haroon','Jameed','Sohail','Faizan'];

arrayNames.splice(3,0,'Kamran');
console.log(arrayNames);

export default arrayNames