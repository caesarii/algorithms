const log = require('../../utils/log')
const Node = require("./Node");
const LinkedList = require("./LinkedList");
class Queue extends LinkedList{
    constructor() {
        super();
        // 无需将 last 初始化为 new Node(null)
        this.last = this.first
    }
    enqueue(item) {
        const oldLast = this.last;
        this.last = new Node(item);

        // 这样每次都创建一个 new Node(null)
        this.last.next =  new Node(null);
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

const testQueue = () => {
    const arr = [0, 1, 2, 3, 4, 5, 7];
    const queue = new Queue();
    arr.forEach(item => {
        queue.enqueue(item);
    });
    log('to string',  queue.toString())
    log('dequeque', queue.dequeue());
    log('size: ', queue.size());
    log('is empty', queue.isEmpty());
    queue.iterator((ele, index) => {
        log(ele, index);
    });
}

if(require.main === module) {
    testQueue()
}

