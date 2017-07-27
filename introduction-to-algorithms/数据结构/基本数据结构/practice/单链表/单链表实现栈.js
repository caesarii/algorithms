const log = (() => {
    return console.log.bind(console)
})()

class Node {
    constructor(key) {
        this.key = key
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = null
    }

    push(key) {
        const node = new Node(key)
        node.next = this.head
        this.head = node
    }

    pop() {
        const deleted = this.head
        this.head = this.head.next
        return deleted

    }
}



const testStack = () => {
    const stack = new Stack()
    stack.push('qinhge')
    stack.push('13')
    stack.push('IT')
    log(stack.head)

    log(stack.pop())
    log(stack.head)

}

if(require.main === module) {
    testStack()
}