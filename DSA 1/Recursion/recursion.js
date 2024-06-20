// //this is not a recursive function this is just a representation of the recursive function function 
// function P1() {
//     return P2()
// }

// function P2() {
//     return P3()
// }

// function P3() {
//     return P4()
// }
// function P4() {
//     return P5()
// }

// function P5() { // base case
//     return true
// }

// console.log(P1())


// // //Recursion Example
// function goToLunch(person) {
//     if (person == 5) {//base case
//         return true
// //     }
// //     console.log(person);
// //     return goToLunch(person + 1)
// // }
// // console.log("outcome:", goToLunch(1))



// //convert a function of for loop to a recursive function
// // function multiply(arr){
// //     let product = 1
// //     for(let i=0;i<arr.length;i++){
// //         product*=arr[i]
// //     }
// //     return product
// // }

// //4* multiply([1,2,3])
// //multiply([1,2,3]) => 3* multilpy([1,2])


// function multiply(arr) {
//     if (arr.length <= 0) {
//         return 1
//     } else return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1))
// }
// console.log(multiply([1, 2, 3, 4]))



// // let abc = [1, 2, 3, 4, 5]
// // console.log(abc.slice(0, abc.length - 1))

//sum of array
// function Sum(arr){
//     if(arr.length<=0){
//         return 0
//     }else{
//         return arr[arr.length-1] + Sum(arr.slice(0, arr.length - 1))
//     }
// }
// console.log(Sum([1, 2, 3, 4]))

// //recursion questions

//FACTORIAL OF NUMBER
function factorial(n){
    if(n === 1){
        return 1
    }else{
       return n * factorial(n-1)
    }
}

console.log('fact',factorial(5))


// var fib = function (n) {
//     let arr = [0, 1];
//     for (let i = 2; i <= n; i++) {
//       arr.push(arr[i - 2] + arr[i - 1]);
//     }
//     return arr[n];
//   };
  
//   function fibRecursion(n) {
//     if (n <= 1) return n;
//     return fibRecursion(n - 1) + fibRecursion(n - 2);
//   }


//   function recu(array){
//     if(array.length){
//         return 9
//     }else{
//         return array[array.length-1] + recu(arr.slice(0,array.length-1))
//     }
//   }

// console.log(r)


function factorial123(n){
    if(n == 1){
        return 1
    }else{
        return n * factorial123(n-1)
    }
}
console.log('123',factorial(5));



function rec(str) {
    if (str === '') {
        return str;
    }

    let firstChar = str.substr(0, 1);
    if ('aeiouAEIOU'.includes(firstChar)) {
        firstChar = '1';
    }

    return firstChar + rec(str.substr(1));
}

// Test the function
console.log(rec("hellosreeharihowareyou")); // Output: h1ll1sr11h1r1h1w1r1y11