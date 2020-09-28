// const arr = ['Amit1', 'Amit2', 'Amit3', 'Amit4', 'Amit5', 'Amit6', 'Amit7', 'Amit8', 'Amit9', 'Amit10', 'Amit11'];
// let selected = [];

// for (let i = 0; i <= 10; i++) {
//     selected = arr.sort(() => .5 - Math.random()).slice(0, Math.floor(Math.random() * arr.length));
//     console.log(selected);
    
// }

// const arr = [];
// for (let i = 0; i <= 5; i++) {
//     const va = Math.floor(Math.random() * 1000);
//     if (arr.indexOf(va) < 0) {
//         arr.push(va);
//     }
// }

// console.log(arr);

// const arr = [1, 2, 15, 9, 48, 8, 7];

// const a = arr.reduce((p, c, ci, arr) => {
//     if(ci > 3) {
//         if (arr[ci - 1] > c) {
//             p = -1;
//         } else {
//             p = c
//         }
//         console.log(p, c, ci, arr[ci]);
//         // if(c > p) {
//         //     p = c;
//         // }
//     }
//     return p;
// }, - 1);

// console.log(a);

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const selected = arr1.sort(() => .5 - Math.random());
// console.log(selected);

var buttonVars = [
    {id: 1, background: '#000000', textValue: 1},
    {id: 2, background: '#2B8EAD', textValue: 2},
    {id: 3, background: '#333333', textValue: 3},
    {id: 4, background: '#6F98A8', textValue: 4},
    {id: 5, background: '#FFFFFF', textValue: 5},
    {id: 6, background: '#BFBFBF', textValue: 6},
    {id: 7, background: '#EFEFEF', textValue: 7},
    {id: 8, background: '#2F454E', textValue: 8},
    {id: 9, background: '#72C3DC', textValue: 9},
];

const selected = buttonVars.sort(() => .5 - Math.random());
console.log(selected);