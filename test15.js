const test15Obj = {
    id: 1,
    get title() {
        return this._title;
    },
    set title(value) {
        this._title = value;
    },
    displayValue: function() {
        return this.id + ' ---- ' + this.title;
    },
    displayValue1: () => {
        return this.id + ' ---- ' + this.title;
    }
};

console.log(test15Obj._title);
test15Obj.title = 'amit';
console.log(test15Obj.title);
console.log(test15Obj.displayValue());
console.log(test15Obj.displayValue1());
console.log(test15Obj._title);
