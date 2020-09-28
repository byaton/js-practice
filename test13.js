const test13Obj1 = {
    id: 1,
    name: 'Amit',
    age: 40,
    hobbies: ['Watching movies', 'Football']
}

// const test13Obj2 = test13Obj1;
// const test13Obj2 = {...test13Obj1};
// const test13Obj2 = {...test13Obj1, hobbies: [...test13Obj1.hobbies], name: 'amit Roy'};
const test13Obj2 = Object.assign({}, test13Obj1);

test13Obj1.age = 87;
test13Obj1.hobbies.push('Cycling');

console.log(test13Obj1);
console.log(test13Obj2);

if ('age' in test13Obj1) {
    console.log('Age is a property here');
    
}

if (test13Obj2.name12 === undefined) {
    console.log('name12 is not a property on this object');
    
}