// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.


let fahrenheitTemperatures = [];
let calciusArray: number[] = [23, 34];

let fahrenheit = 0

for (let i = 0; i < calciusArray.length; i++) {
    // let celsius = parseFloat(celciusTemperatures[i]);
    fahrenheit = (calciusArray[i] * 9/5) + 32;
    fahrenheitTemperatures.push(fahrenheit);
}



console.log(`The temperatures in Fahrenheit are: [${fahrenheitTemperatures}]`);