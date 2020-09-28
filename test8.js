const test8Arr1 = [1, 2, 5, 8, 7, 3];
const test8Arr2 = [
    {id: 1, name: 'Amit1', age: 41},
    {id: 2, name: 'Amit2', age: 42},
    {id: 3, name: 'Amit3', age: 43},
    {id: 4, name: 'Amit4', age: 44},
    {id: 5, name: 'Amit5', age: 45},
    {id: 6, name: 'Amit6', age: 46},
    {id: 7, name: 'Amit7', age: 47}
];

// const test8Arr2Copied = test8Arr2;
// const test8Arr2Copied = [...test8Arr2];

// const test8Arr2Copied = [...test8Arr2].map(p => ({id: p.id, name: p.name, age: p.age}));
// const test8Arr2Copied = test8Arr2.map(p => ({id: p.id, name: p.name, age: p.age}));
// const test8Arr2Copied = test8Arr2.map(p => ({...p}));
// const test8Arr2Copied = test8Arr2.map(p => ({...p}));
const test8Arr2Copied = test8Arr2.map(p => p);

test8Arr2.push({id: 8, name: 'Amit8', age: 48});
test8Arr2[3].age = 74;
console.log(test8Arr2Copied);
console.log(test8Arr2);
