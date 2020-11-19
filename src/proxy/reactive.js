
/**
 *
 * 手动实现 ref、reactive
 */
function ref(val) {
    return reactive({ value: val })
}

function reactive(obj) {
    if (typeof obj === 'object') {
        if (obj instanceof Array) {
            //数组
            obj.forEach((item, index) => {

                if (typeof item === 'object') {
                    obj[index] = reactive(item)
                }
            })
        } else {
            for (let key in obj) {
                if (typeof obj[key] === 'object') {
                    obj[key] = reactive(obj[key])
                }
            }
        }
    }
    return new Proxy(obj, {
        get(obj, key) {
            return obj[key]
        },
        set(obj, key, value) {
            obj[key] = value
            console.log('调用了set方法')
            return true
        }
    })
}

let data = {
    a: 1,
    b: {
        c: 3,
        d: {
            f: 4
        }
    }
}
//对象
let state = reactive(data)
state.a = 'a'
state.b.c = 'c'
state.b.d.f = 'f' // 调用了三次
console.log(state)


//数组
let arr = [1, 2, 3, 4['a', 'b']]
let state1 = reactive(data)
state1[1] = '2'
state1[4] = ['c', 'd']
console.log(state1)


//ref
let state2 = ref('name')
state2.value = 'age'
console.log(state2)