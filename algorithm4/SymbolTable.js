const Node = require('./Node')

const equal = (host, guest) => {
    return host === guest
}
class SymbolTable {
    constructor() {
        this.first = null
    }
    static equal(host, guest) {
        return host === guest
    }

    put(key, val) {
        // 头结点
        let first = this.first

        // 头结点
        if(first === null) {
            this.first = new Node(key, val)
            return
        }

        // 已有的key
        for(let node = first; node !== null; node = node.next) {
            if(SymbolTable.equal(key, node.key)) {
                node.val = val;
                return
            }
        }

        // 新建key
        const oldFirst = first
        this.first = new Node(key, val)
        this.first.next = oldFirst
    }

    get(key) {
        for(let node = this.first; node !== null; node = node.next) {
            if(SymbolTable.equal(key, node.key)) {
               return node.val
            }
        }

        return null
    }
}

if(require.main === module) {
    const table = new SymbolTable()
    table.put('name', 'qinghe')
    table.put('age', 14)
    console.log(table.get('name'))
    console.log(table.get('age'))
    table.put('age', 15)
    console.log(table.get('age'))
}