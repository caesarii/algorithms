
class Counter{
    constructor(init) {
        this.value = init;
    }
    increment() {
        this.value ++;
    }
    decrease() {
        this.value --;
    }
    print() {
        console.log(this.value);
    }
}

const counter = new Counter(3);
counter.increment();
counter.print();
counter.decrease();
counter.print();

