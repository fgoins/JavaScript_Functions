// console.log("Hello World!\n==========\n");

// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

// function printodds(count){
//     for (let i = 1; i < count; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
//   }
//  console.log(printodds);
// }
// //call the function outside the function
// printodds(30);
// printodds(100);

// Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");

// function checkAge(name, age){
//     let aboveSixteen = `Congrats ${name}, you can drive!`;
//     let belowSixteen = `Sorry ${name}, but you need to wait until your 16.`;
   
//     if ( age > 16) {
//         console.log(aboveSixteen);
//     } else {
//         console.log(belowSixteen);
//     }
    
// }
// checkAge("faith", 24);
// checkAge("marvin", 12);
// checkAge("loga", 17);

// Exercise 3 Section
// function cordinates(x, y){
//     if (x < 0 && y > 0) {
//         console.log(`Quad 1`) ;
//     } else if(x > 0 && y > 0) {
//         console.log(`Quad 2`);
//     } else if (x < 0 && y < 0){
//         console.log(`Quad 3`);
//     }else if (x > 0 && y < 0){
//         console.log(`Quad 4`);
//     }else {
//         console.log(`Center`);
//     }
// }
// cordinates(-2,3);
// cordinates(1,1);
// cordinates(-2,-4);
// cordinates(3, -8);
// cordinates(0,0);

//Excersize 4 section
function isActualTriangle(a,b,c){
    return a+b>c && a+c>b && b+c>a;
}
function whatTriangle(a, b, c){
    let isTriangle = isActualTriangle(a, b, c);
    if(isTriangle) {
        if (a == b && b == c) {
          console.log( `Equilateral`);
        } else if(a == b || b==c || c==a ) {
            console.log( `Isosceles`);
        }else {
            console.log( `scalene`);
        }
    }else {
        return `Not a triangle`;
    }
}
whatTriangle(1,1,1);
whatTriangle(3,3,5);
whatTriangle(4,7,8);
whatTriangle(1,2,-1);