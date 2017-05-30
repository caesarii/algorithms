
class List {
    constructor() {
        this.data = {};
        this.N = 0;
    }
    size() {
        return this.N
    }
    isEmpty() {
        return this.N === 0;
    }
    elementAt(index) {
        return this.data[index]
    }
    insertAt(index, item) {
        this.data[index] = item;
        this.N ++;
    }
    toString() {

    }
    iterator(callback) {
        for(let index = 0; index < this.N; index ++) {
            callback(this.data[index], index);
        }
    }
}

const list = new　List();
const arr = ["0", '1', '2', '3'];
arr.forEach((ele, index) => {
    list.insertAt(index, ele);
});
console.log(list.data)
console.log(list.size());
console.log(list.iterator((ele, index) => {console.log(ele, index)}));

module.exports = List;