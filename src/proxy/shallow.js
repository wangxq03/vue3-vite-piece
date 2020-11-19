/**
 * 
 * 手动实现 shallowRef、shallowReactive
 */

function shallowRef(obj) {
    return shallowReactive({ value: obj })
}

function shallowReactive(obj) {
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
let state = shallowReactive(data)
// state.a = 2
// state.b.c = 4
// state.b.d.f = 5  //只调用一次set


let state1 = shallowRef(data)
state1.value.a = 2
state1.value.b = 2
state1.value.b.c = 5  // 没有调用 set


// 调用了set方法
state1.value = {
    a: 'a',
    b: {
        c: 'c',
        d: {
            f: 'f'
        }
    }
}
