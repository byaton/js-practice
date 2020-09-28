const test6Arr = [2, 1.25, 4.51, 1.29, 1.87, 1.54, 1.29];


// const test6SortedArrayReverse = test6Arr.sort((x, y) => y - x);
// const test6SortedArray = test6Arr.sort((x, y) => x - y);
const test6SortedArray = test6Arr.sort((x, y) => {
    console.log(x, y);
    
    if (x > y) {
        return 1;
    } else if(x === y) {
        return 0;
    } else {
        return -1;
    }
});

// console.log(test6SortedArray);
// console.log(test6SortedArrayReverse);

