
const Node = require("./Node.js");
const LinkedList = require("./LinkedList");

class Stack extends LinkedList{
    constructor() {
      super();
    }

    push(item) {
        const node = new Node(item);
        const oldFirst = this.first;
        this.first = node;
        this.first.next = oldFirst;
        this.N ++;
    }
    pop() {
        const item = this.first.item;
        this.first = this.first.next;
        this.N --;
        return item;
    }
}

const stack = new Stack();
console.log(stack.isEmpty());
const items = [0, 1, 2, 3, 4, 5, 6];
items.forEach((item, index) => {
    stack.push(item);
});
stack.toString();
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.pop());
stack.iterator((ele, index) => {
    console.log(ele, index);
});