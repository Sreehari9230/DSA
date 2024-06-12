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


// //Recursion Example
// function goToLunch(person) {
//     if (person == 5) {//base case
//         return true
//     }
//     console.log(person);
//     return goToLunch(person + 1)
// }
// console.log("outcome:", goToLunch(1))



//convert a function of for loop to a recursive function
// function multiply(arr){
//     let product = 1
//     for(let i=0;i<arr.length;i++){
//         product*=arr[i]
//     }
//     return product
// }

//4* multiply([1,2,3])
//multiply([1,2,3]) => 3* multilpy([1,2])
function multiply(arr) {
    console.log(arr)
    if (arr.length <= 0) {
        return 1
    } else return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1))
}

console.log(multiply([1, 2, 3, 4]))



// let abc = [1, 2, 3, 4, 5]
// console.log(abc.slice(0, abc.length - 1))




//recursion questions