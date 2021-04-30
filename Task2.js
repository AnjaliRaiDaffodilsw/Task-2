class Anjali {
    constructor(handler) {
        this.status = "pending";
        this.onFulfilledArrays = [];
        this.onRejectedArrays = [];

        const resolve = (value) => {
            if (this.status === "pending") {
                this.status = "resolved";
                this.value = value;
                this.onFulfilledArrays.forEach(item => item(value));
            }
        };

        const reject = (value) => {
            if (this.status === "pending") {
                this.status = "rejected";
                this.value = value;
                this.onRejectedArrays.forEach(item => item(value));
            }
        };

        try {
            handler(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    show(onFulfilling, onRejecting) {
        if (this.status === "pending") {
            this.onFulfilledArrays.push(onFulfilling);
            this.onRejectedArrays.push(onRejecting);
        }

        if (this.status === "resolved") {
            onFulfilling(this.value );
        }

        if (this.status === "rejected") {
            onRejecting(this.value);
        }
     }
} 


const test = new Anjali((resolve, reject) => {
    setTimeout(() => resolve('resolve !'), 1000);
});
test.show((res) => {
    console.log(res+ '🙂');
}, (err) => {
    console.log(err+'😲');
});