/**
 * vue3.0使用Proxy 使得数据变成响应式的
 */
let obj = { name: 'sukey', age: 18 }
let state = new Proxy(obj, {
    get(obj, key) {
        console.log('调用了get方法：：', obj, key)
        return obj[key]
    },
    set(obj, key, value) {
        obj[key] = value
        console.log('调用了set方法：：', obj, key, value)
        return true
    }
})

console.log(state.name)

state.age = 20
console.log(state)