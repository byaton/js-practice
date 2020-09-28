const test5FuncAdd = (messageHandler, ...args) =>  {
    messageHandler(args.reduce((x, y) => x + y));
}

const test5FuncSubtract = (messageHandler, ...args) =>  {
    messageHandler(args.reduce((x, y) => x - y));
}

const showMessage = (message, finalValue) => {
    console.log(message + ' ' + finalValue);
    
}

test5FuncAdd(showMessage.bind(this, 'The Final Value after adding is'), 1,2,3,4,5,6,7,8);
test5FuncSubtract(showMessage.bind(this, 'The Final Value after subtraction is'), 1,2,3,4,5,6,7,8);
