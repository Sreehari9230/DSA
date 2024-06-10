let map = new Map([['a',1],['b', 2]]) // create a new map use a map constructor map set constuctor accepts an array as its argument
map.set('c',3) // to add a new key value pair to map
console.log(map.has('b')); // check if the key exist
map.delete('a') // to dlete a key and value from map
console.log(map.size); // size of the map
map.clear() // to delte all of the key value pairs
for([key,value] of map){
    console.log(`${key}: ${value}`)
}