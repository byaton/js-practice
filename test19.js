class BaseClass {
    name = 'Amit';
    age = 40;
    BaseClass(name, age) {
        this.name = name;
        this.age = age;
    }
    constructor() {
    }
}

class DerivedClass extends BaseClass {
    constructor() {
        super()
    }
    DerivedClass(desig) {
        this.desig = desig;
    }
    DerivedClass(desig, name, age) {
        super.name = name;
        super.age = age;
        this.desig = desig;
    }
}

const test19Obj1 = new DerivedClass('Tech Lead');
const test19Obj2 = new DerivedClass('TL', 'Byaton', 48);
console.log(test19Obj1.desig, test19Obj1.name, test19Obj1.age);
console.log(test19Obj2.desig, test19Obj2.name, test19Obj2.age);
// console.log();

console.log(test19Obj1 instanceof DerivedClass);
console.log(test19Obj1 instanceof BaseClass);
console.log(test19Obj2 instanceof Object);

