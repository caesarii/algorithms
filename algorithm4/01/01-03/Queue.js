const Node = require("./Node");
const LinkedList = require("./LinkedList");
class Queue extends LinkedList{
    constructor() {
        super();
        this.last = new Node(null);
    }
    enqueue(item) {
        const oldLast = this.last;
        this.last = new Node(item);
        // this.last.next 不能使null, 为了简化 遍历
        // 可以再优化一下
        this.last.next = new Node(null);
        if(this.isEmpty()) {
            this.first = this.last;
        } else {
            oldLast.next = this.last;
        }
        this.N ++;
    }
    dequeue() {
        const item = this.first.item;
        this.first = this.first.next;
        if(this.isEmpty()) {
            this.last = null;
        }
        this.N --;
        return item;
    }
}

const arr = [0, 1, 2, 3, 4, 5, 7];
const queue = new Queue();
arr.forEach(item => {
    queue.enqueue(item);
});
queue.toString();
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.isEmpty());
queue.iterator((ele, index) => {
    console.log(ele, index);
});

