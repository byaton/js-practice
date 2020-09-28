test20Obj1 = {
    name: 'Amit Byaton',
    age: 40,
    rating: 5,
    greet: function() {
        console.log(this.name, this.age);
    },
    setAge: function(age) {
        this.age = age;
    }
}

// test20Obj1.greet();

//test20Obj1.age = 41;

test20Obj1.setAge(41);
console.log(test20Obj1);
// console.log(Object.getOwnPropertySymbols(test20Obj1));
// console.log(Object.getOwnPropertyDescriptors(test20Obj1));
Object.defineProperty(test20Obj1, 'age', {writable: false});
Object.defineProperty(test20Obj1, 'greet', {enumerable: false});

for (obj in test20Obj1) {
    console.log(obj);
}

// test20Obj1.age = 42;
test20Obj1.setAge(48);
// console.log(test20Obj1);
test20Obj1.greet();

Object.defineProperty(test20Obj1, 'rating', {configurable: false});

delete test20Obj1.rating;

console.log(test20Obj1);