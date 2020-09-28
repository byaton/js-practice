function Test21Fun () {
    this.name = 'Amit';
    this.age = 40;
    this.greet = function() {
        console.log('Hello ', this.name, this.age);
        
    }
}

test21Obj1 = new Test21Fun();
//test21Obj1.greet();

console.log(test21Obj1);
