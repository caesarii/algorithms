const log = require('../../utils/log')
const Node = require("./Node.js");
const LinkedList = require("./LinkedList");


class Stack extends LinkedList{
    constructor() {
      super();
    }

    push(item) {
        const oldFirst = this.first;
        const node = new Node(item);
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

const testStack = () => {
    const stack = new Stack();
    log('is empty ?', stack.isEmpty());
    const items = [0, 1, 2, 3, 4, 5, 6];
    items.forEach((item, index) => {
        stack.push(item);
    });
    log('to string: ', stack.toString());
    log('size', stack.size());
    log('is empty: ', stack.isEmpty());
    log('pop', stack.pop());
    stack.iterator((ele, index) => {
        log(ele, index);
    });
}

if(require.main = module) {
    testStack()
}

