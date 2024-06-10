const set = new Set([1, 2, 3]) // create a new set use a set constructor and set constuctor accepts an array as its argument
set.add(4) // adding an element to the set
set.add(2) // if we try to add duplicate value it will avoid it
console.log(set.has(1)) // check if a value exist in the set
set.delete(1) // deleteing an elementfrom set
console.log(set.size); // get the size of the set
set.clear() // delete all element from the set
for (ele of set) {
    console.log(ele);
}