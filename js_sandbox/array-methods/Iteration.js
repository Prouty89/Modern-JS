

// forEach

[1, 2, 3].forEach(function(item, index) {
    console.log(item, index)
});

// map
const three = [ 1, 2, 3];
const doubled = three.map(function(item) {
    return item * 2;
});
console.log(doubled)

// filter
const ints = [1, 2, 3];
const evens = ints.filter(function(item) {
    return item % 2 === 0;
});
console.log(evens);
console.log(ints)

// reduce
const sum = [1, 2, 3].reduce(function( result, item) {
    return result + item;
}, 0);
console.log(sum)

// some
const hasNegative = [1, 2, 3, -1, 4].some(function(item) {
    return item < 0;
})
console.log(hasNegative)

// every
const allPositive = [1,2,3].every(function(item) {
    return item > 0;
});
console.log(allPositive);

// find
const objects = [{ id: 'a'}, { id: 'b'}, { id: 'c'}];
const found = objects.find(function(item) {
    return item.id === 'b';
});
console.log(found);

// find index

const objects2 = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const foundIndex = objects2.findIndex(function(item){
    return item.id === 'b';
})
console.log(foundIndex);


// filter


const items = [
    { name: 'Bike', price: 100 },
    { name: 'Bike', price: 10 },
    { name: 'Bike', price: 15 },
    { name: 'Bike', price: 50 },
    { name: 'Bike', price: 25 },
]

const filteredItems = items.filter((item) => {
    return item.price <= 20
});

console.log(filteredItems);


