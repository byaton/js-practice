const userChosenKeyName = 'level';
const person = {
    'first name': 'Amit Roy',
    age: 40,
    hobbies: ['sport', 'TV'],
    [userChosenKeyName]: 'level12345698',
    0: '0000',
    1.2: '154444',
    greet: () => {
        console.log('Hi There');
    }
    
};

person.isAdmin = true;
console.log(person);
delete person.hobbies;
console.log(person);
console.log(person['first name'], person['age']);
console.log(person['0'], person[0]);
console.log(person['1.2'], person[1.2]);
console.log(person[userChosenKeyName], person['level'], person.level);



