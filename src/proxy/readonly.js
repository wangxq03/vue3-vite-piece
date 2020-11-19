/**
 * 手动实现 shallowReadonly readonly
 */

function readonly(obj) {
    if (typeof obj === 'object') {
        if (obj instanceof Array) {
            //数组
            obj.forEach((item, index) => {
                if (typeof item === 'object') {
                    obj[index] = shallowReadonly(item)
                }
            })
        } else {
            for (let key in obj) {
                if (typeof obj[key] === 'object') {
                    obj[key] = shallowReadonly(obj[key])
                }
            }
        }
    }
    return shallowReadonly(obj)
}

function shallowReadonly(obj) {
    return new Proxy(obj, {
        get(obj, key) {
            return obj[key]
        },
        set(obj, key, value) {
            console.warn(`obj的${key}属性不能赋值`)
        }
    })
}

let data = {
    a: 1,
    b: {
        c: 3,
        d: {
            f: 4,

        }
    }
}
let state = shallowReadonly(data)
state.a = 2
state.b.c = 'c'
console.log(state)


let state1 = readonly(data)
state1.a = 2
state1.b.c = 'c'
state1.b.d.f = 'f'
console.log(state1)
