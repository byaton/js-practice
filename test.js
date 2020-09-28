const testJson = [
    {id: 1, name: 'Amit1'},
    {id: 2, name: 'Amit2'},
    {id: 3, name: 'Amit3'},
    {id: 4, name: 'Amit4'},
    {id: 5, name: 'Amit5'},
    {id: 6, name: 'Amit6'},
    {id: 7, name: 'Amit7'}
];

const a1 = {a2: 'asd', a3: testJson};
const a4 = {name: 'Anything', age: 'something'};
const a5 = {a6:a1, a7:a4};
const a8 = [1, '2', 'asd', 5.6, [1, 2, 'g'], [1, 2, ['d', 'f', 56]]];
const a9 = [1, 2, 5, 'd', 5.6];

// testJson.map((record, index) => {
//     console.log(index++);
//     console.log(index);
//     console.log(record);
// });

//const {a2: a4, a3: a5} = a1;
// const {a2: a4} = a1;
// const {a3: a5} = a1;


// const {a6, a7} = a5;
const {a7} = a5;
const {a6} = a5;


// console.log(a6);
// console.log(a7);

// console.log(typeof(testJson))
console.log(typeof(a8));
const a10 = Object.keys().map(x => x);
console.log(a10);