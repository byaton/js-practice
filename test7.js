const test7Arr1 = [1, 2, 5, 8, 7, 3];
const test7Arr2 = [
    {id: 1, name: 'Amit1', age: 41},
    {id: 2, name: 'Amit2', age: 42},
    {id: 3, name: 'Amit3', age: 43},
    {id: 4, name: 'Amit4', age: 44},
    {id: 5, name: 'Amit5', age: 45},
    {id: 6, name: 'Amit6', age: 46},
    {id: 7, name: 'Amit7', age: 47}
];

// const sum = test7Arr.reduce((prevVal, curVal, curIndex, curarray) => {
//     console.log(prevVal, curVal, curIndex);
//     return prevVal > curVal;
// }, 0);

const sum1 = test7Arr1.reduce((preVal, curVal) => preVal + curVal, 0);

// const sum2 = test7Arr2.reduce((prevVal, curVal) => {
//     console.log(prevVal, curVal);
//     return prevVal + curVal.age;
// }, 0);

const sum2 = test7Arr2.reduce((preVal, curVal) => preVal + curVal.age, 0);
console.log(sum1);
console.log(sum2);
