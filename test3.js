function greet() {
    let x = 2;

    rand: function rand() {
        x += 8;
        console.log(x);
    }
    
}

greet.prototype.y = 8;

greet.prototype.add = () => {
    console.log(greet.x);
    console.log(greet.y);
    console.log(greet.x + greet.y);
}

const g = new greet();
// console.log(g.y);
// console.log(g.x)

console.log(g.rand());
// console.log(g.rand());
// console.log(greet()());
console.log(g.x);



