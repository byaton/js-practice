const test1Json = [
    {id: 1, name: 'Amit1'},
    {id: 2, name: 'Amit2'},
    {id: 3, name: 'Amit3'},
    {id: 4, name: 'Amit4'},
    {id: 5, name: 'Amit5'},
    {id: 6, name: 'Amit6'},
    {id: 7, name: 'Amit7'}
];

const a11 = {a12: 'asd', a13: test1Json};
const a14 = {name: 'Anything', age: 'something'};
const a15 = [a11, a14];

const testFun = (...a15) => {
    console.log(a15[0]);
    console.log(a15[1]);
}

testFun(a15);