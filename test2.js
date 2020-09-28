const arrObj1 = [
    {id: 1, name: 'Amit Roy1', hobby: 'Filming1'},
    {id: 2, name: 'Amit Roy2', hobby: 'Filming2'},
    {id: 3, name: 'Amit Roy3', hobby: 'Filming3'},
    {id: 4, name: 'Amit Roy4', hobby: 'Filming4'},
    {id: 5, name: 'Amit Roy5', hobby: 'Filming5'}
];

// obj1.forEach(x => {
//     Object.keys(x).forEach(y => console.log(y, x[y]));
//     // console.log(x);
// });

for (const arrObjEntry of arrObj1) {
    // console.log(arrObjEntry);
    for (const objEntry in arrObjEntry) {
        // console.log(objEntry, arrObjEntry[objEntry]);
    }
}

const strObj1 = 'AmitKumar Roy';

for (const strObjEntry in strObj1) {
    console.log(strObjEntry);
    
}