const log = (() => {
    return console.log.bind(console)
})()

class Node {
    constructor(key) {
        this.key = key
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }

    enqueue(key) {
        const node = new Node(key)

        // 第一个元素，head 和 tail 都指向 node
        if(this.head === null) {
            this.head = node
        }

        // 插入新节点
        if(this.tail !== null) {
            this.tail.next = node
        }

        // tail 重定向
        this.tail = node
    }

    dequeue() {
        const deleted = this.head
        this.head = this.head.next

        // 元素已经全部删除，清空 tail 的引用
        if(this.head === null) {
            this.tail = null
        }

        return deleted
    }
}


const testQueue = () => {
    const queue = new Queue()
    queue.enqueue('qinghe')
    queue.enqueue('14')
    queue.enqueue('it')
    log(queue.head)
    log(queue.tail)

    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    log(queue.head)
    log(queue.tail)
}

if(require.main === module) {
    testQueue()
}