let batMan = {
    fname: 'Bruce',
    lname: 'Wayne',
    'gf-Name': 'catWomen',
    fullName: function () {
        console.log(this.fname, this.lname)
    }

}
// console.log(batMan.fname, batMan.lname)
console.log(batMan["gf-Name"])
batMan.Nemisis = 'Joker'
delete batMan["gf-Name"]
console.log(batMan);
batMan.fullName()

console.log(Object.keys(batMan))
console.log(Object.values(batMan))
console.log(Object.entries(batMan))


//there is a string we need to find the number of each vowels in it   like a:1,b:2

let str = 'hello sreehari how are you'
let vowels = 'aeiou'
let Vcount = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
}
// for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//         Vcount[str[i]]++
//     }
// }
for (let char of str) {
    if (vowels.includes(char)) {
        Vcount[char]++
    }
}
console.log(Vcount)
console.log(Object.entries(Vcount))
