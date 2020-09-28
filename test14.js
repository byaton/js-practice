const test14Obj1 = {
    id: 1,
    name: 'Amit Roy1',
    fun1: function() {
        console.log(this);
    },
    fun2: () => {
        const varb = 'amit1';
        console.log(this);
    }
};

test14Obj1.fun1();
test14Obj1.fun2();