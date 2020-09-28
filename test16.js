class test16Class {
    productId = 25;
    #pid = 62;
    setProductId(prodId) {      
        console.log(this.#pid);
        this.#pid = prodId;
        console.log(this.#pid);
        this.productId = this.#pid;
    }
} 

test16Obj1 = new test16Class();
test16Obj1.setProductId(59);
console.log(test16Obj1.productId);
console.log(test16Obj1.pid);
