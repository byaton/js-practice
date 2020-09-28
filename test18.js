let test18Obj1 = [1, 2, 'test', 2.52, ['7', 'as1', ['2', ['rt', ['4', ['tr']], 'hy', [6, '*7']]], 4, '5', '65s']];

const test18Obj2 = test18Obj1.flat(Infinity).reduce((x, y) => isNaN(y) ? x : x += Number(y), 0);

console.log(test18Obj2);

const test18Obj3 = [1, 2, 'test', 2.52, ['7', 'as1', ['2', ['rt', ['4', ['tr']], 'hy', [6, '*7']]], 4, '5', '65s']];

// const test18Obj4 = test18Obj3.flat(Infinity).reduce((x, y) => {
//     console.log('Outer - X ->', x);
//     console.log('Outer - Y -> ', y);
    
    
//     if (!isNaN(y)) {   
//         console.log('Inner - X ->', x);
//         console.log('Inner - Y ->', y);      
//         return x += Number(y);
//     } else {return x;}
// }, 0)
// console.log(test18Obj4);

// test18Obj3.flaMap(x => console.log(x));
