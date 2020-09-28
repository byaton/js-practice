const test11Person1 = {id: 1, name: 'Amit1'};
const test11Person2 = {id: 2, name: 'Amit2'};
const test11Person3 = {id: 1, name: 'Amit1'};
const test11Person4 = {id: 3, name: 'Amit3'};

const test11WeakSet = new WeakSet();

test11WeakSet.add(test11Person1);
test11WeakSet.add(test11Person2);
test11WeakSet.add(test11Person3);

if (test11WeakSet.has(test11Person1)) {
    console.log('Hi 1');
} else {
    console.log('Bye 1');
}

if (test11WeakSet.has(test11Person4)) {
    console.log('Hi 4');
} else {
    console.log('Bye 4');
}

console.log(test11WeakSet);