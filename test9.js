const test9Arr = ['Amit1', 'Amit2', 'This is test only', 4.57, 5, 'top'];
const [,test9FItem, test9SItem, ...test9Arr1] = test9Arr;

// console.log(test9FItem);
// console.log(test9SItem);
// console.log(test9Arr1);

const test9Obj1 = {id: 1, name: {first: 'Amit1', last: 'Roy1'}, age: 40};

const {id, name: {first: first1, last}} = test9Obj1;

console.log(id);
console.log(first1);
console.log(last);
