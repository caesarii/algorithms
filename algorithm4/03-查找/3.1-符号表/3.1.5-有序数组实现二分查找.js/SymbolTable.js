
const less = (eleA, eleB) => {
    return eleA < eleB
}

class SymbolTable {
    constructor() {
        this.keys = []
        this.values = []
    }

    isEmpty() {
        return this.keys.length <= 0
    }

    rank(key, low=0, high=this.keys.length - 1) {
        if(high < low) {
            return low
        }
        let middle = low + Math.floor((high - low) / 2)
        if(key < middle) {
            return rank(key, low, middle - 1)
        } else if(key > middle) {
            return rank(key, middle + 1, high)
        } else {
            return middle
        }
    }

    get(key) {
        const keys = this.keys
        const len = this.keys.length
        const values = this.values

        if(this.isEmpty()) {
            return null
        }
        const index = this.rank(key)
        // console.log('index', index)
        if(keys[index] === key) {
            return values[index]
        } else {
            return null
        }
    }

    put(key, val) {
        const len = this.keys.length

        // 已有的key
        const index = this.rank(key)
        // console.log('index', index)
        if(this.keys[index] === key) {
            this.values[index] = val
            return
        }

        // 新建key
        // 移位
        for(let key = len; key > index; key--) {
            this.keys[key] = this.keys[key - 1]
            this.values[key] = this.values[key - 1]
        }
        this.keys[index] = key
        this.values[index] = val
        // console.log('values', this.values)
        // console.log('keys', this.keys)
    }

}

if(require.main === module) {
    const table = new SymbolTable()
    table.put('name', 'qinghe')

    console.log('get name', table.get('name'))
    table.put('age', 14)
    console.log('get age', table.get('age'))
    table.put('age', 15)
    console.log(table.get('age'))
}