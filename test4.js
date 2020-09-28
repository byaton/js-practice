const test4Func1 = () => {
    console.log('Hey - how are you doing');
}

// test4Func1();

const test4Func2 = (...args) => {
    let sum = 0;
    for (const iterator of args) {
        sum += iterator;
    }
    return sum;
}

// test4Func2(2,3,4,5,6,7,8,9);
console.log(test4Func2(2,3,4,-5,6,7,8,-9,8,7));

const test4Func3 = function() {
    let sum = 0;
    for (const arg of arguments) {
        sum += arg;
    }
    return sum;
}


// test4Func3(2,3,4,5,6,7,8,9);
console.log(test4Func3(2,3,4,-5,6,7,8,-9,8,7));