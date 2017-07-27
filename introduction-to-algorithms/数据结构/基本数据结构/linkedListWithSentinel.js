const log = require('../../utils/log')

class LinkedList {
    constructor() {
        this.sentinel = new Node(null)
        this.sentinel.next = this.sentinel
        this.sentinel.prev = this.sentinel
    }

    // 按关键字搜索节点
    search(key) {
        for(let node = this.sentinel.next; node !== null; node = node.next) {
            if(node.key === key) {
                return node
            }
        }
    }

    insert(key) {
        const node = new Node(key)
        // 后继
        node.next = this.sentinel.next
        // 后继的引用
        this.sentinel.next.prev = node
        // 头结点重定向
        this.sentinel.next = node
        // 前继
        node.prev = this.sentinel
    }


    delByKey(key) {
        const node = this.search(key)
        node.prev.next =  node.next
        node.next.prev = node.prev
    }


}


class Node {
    constructor(key) {
        this.key = key
        this.next = null
        this.prev = null
    }
}

const testLinkedList = () => {
    const list = new LinkedList()
    list.insert('qinghe')
    list.insert('18')
    list.insert('enginner')
    log('list', list.sentinel)

    list.delByKey('qinghe')
    // list.delByKey('18')
    log('list', list.sentinel)

}

if(require.main === module) {
    testLinkedList()
}