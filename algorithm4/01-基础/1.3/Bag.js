
const Node = require("./Node");
const LinkedList = require("./LinkedList");
class Bag extends LinkedList{
    constructor() {
        super();
    }
    add(item) {
        const oldFirst = this.first;
        this.first = new Node(item);
        this.first.next = oldFirst;
        this.N ++;
    }
}

const bag1 = new Bag();
const arr = [0, 1, 2, 3];
arr.forEach(ele => bag1.add(ele));
/*console.log(bag1.isEmpty());
console.log(bag1.size());*/

bag1.iterator((ele, index) => {
    console.log(ele, index);
});
