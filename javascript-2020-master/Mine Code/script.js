// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1, 2, 3, 4, 5, 6, 7)
// console.log(res);

//Zamikanie

// function creatMember(name) {
//     return function(lastName) {
//         console.log(name + " " + lastName);
//     }
// }

// const logWithLastName = creatMember("Bobur")
// console.log(logWithLastName("Turabov"));

//Massivi

// const cars = [ "BMW", "Mazda", "Ford", "Nissan"]
// cars.push("Toyota")
// // console.log(cars.shift());
// // console.log(cars.unshift());
// // console.log(typeof cars);
// let index = cars.indexOf("Mazda")
// cars[index] = "GTR"
// console.log(cars);

const fib = [1, 3, 5, 7, 9, 11, 13, 15]

const pow2 = num => num ** 2
const sqrt = num => Math.sqrt(num)

const pow2 = fib.map(pow2).map(sqrt)
console.log(pow2);
// const pow2Fib = fib.map(pow2)
// console.log(fib);
// const pow2 = fib.map(num => num ** 2)
