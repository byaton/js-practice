const test10Set = new Set([1, 2, 3, 4, 'Hi']);

test10Set.add('2');
test10Set.add(3);
console.log(test10Set);
test10Set.delete('2');
console.log(test10Set);


for (entry of test10Set.entries()) {
    console.log(entry[0]);
    if (entry[0] === 2) {
        console.log('hi Amit');
    }
}