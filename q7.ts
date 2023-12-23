//  - Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.


// let num=7;
// let fac=1;

// for(num; num>=1; num--){
//     fac=fac*num;
//     console.log(fac)
// }


function fac(n:number) {
    let fac=1
    if (n === 0 || n === 1) {
      return 1;
    } else {
      for(n; n>=1; n--){
        fac=fac*n;
        // console.log(fac)
      }
      return fac
    }
  }
  console.log(fac(1)); 
  console.log(fac(2)); 
  console.log(fac(3)); 
  console.log(fac(4)); 
  console.log(fac(5)); 