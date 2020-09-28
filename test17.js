const test17Obj1 = {
    id: 1,
    firstName: 'Amit',
    lastName: 'Roy',
    address: 'Panagarh'
};

const test17Obj2 = Object.entries(test17Obj1);

console.log(test17Obj2);


const test17Obj3 = [
    ['id', 2],
    ['name', 'Amit Roy'],
    ['class', 'No class']
];

test17Obj4 = Object.fromEntries(test17Obj3);

console.log(test17Obj4);
