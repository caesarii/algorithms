const log = require('../../utils/log')

// 用数组实现队列
class Queue {
    constructor() {
        this.data = []
        this.head = 0

        // 新元素的位置
        this.tail = 0
    }

    enqueue(ele) {
        this.data[this.tail] = ele
        this.tail = this.tail + 1
    }

    dequeque() {
        const ele = this.data[this.head]
        this.head = this.head + 1
        return ele
    }
}

const testQueue = () => {
    const queue = new Queue()
    queue.enqueue('0')
    queue.enqueue('1')
    log('queue', queue.head, queue.tail)
    queue.dequeque()
    log('queue', queue.head, queue.tail)

}

if(require.main === module) {
    testQueue()
}