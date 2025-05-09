import { func } from 'package'
const https = require('https')


let number = func(1)

const object = {
    title: 'Hello',
    count: 18
}

// 判断语句
if (number == 1) {
	
} else if (number == 2) {
	
} else {
	
}

// 循环
for(let i = 0; i < 5; i++) {

}

// 正则
const validFormat = /\d[a-z]\.*\d{4}/i

// 函数
export function greet(name) {
    let message = `Hello ${name}`
    console.log(message)
}
greet('Foo')



// 类
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    get() {
        return this.name
    }
}

export default Dog