const log = require('../../utils/log')

// 用数组实现 stack
class Stack {
    constructor() {
        this.data = []

        // 栈顶
        this.top = -1
    }
    isEmpty() {
        return this.top === -1
    }

    push(ele) {
        // 追加元素
        this.data[this.data.length] = ele

        this.top = this.top + 1
    }

    pop() {
        // 删除最后一个元素
        this.data.length = this.data.length - 1
        this.top = this.top - 1

        // 返回最后弹出的元素
        return this.data[this.top + 1]
    }
}

const testStack = () => {
    const stack = new Stack()
    log('top', stack.top)
    log('isEmpty', stack.isEmpty())

    stack.push('0')
    log('top', stack.top)
    stack.push('1')
    log('top', stack.top)

    stack.pop()
    log('top', stack.top)




}

if(require.main === module) {
    testStack()
}