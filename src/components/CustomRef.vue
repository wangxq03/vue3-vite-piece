<template>
    <div>
        <ul>
            <li v-for="item in state" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
import { customRef } from 'vue'
function myRef(value) {
    // customRef： 自定义ref 追踪数据 使其响应话
    return customRef((track, trigger) => {
        fetch(value).then(res => {
            return res.json()
        })
        .then(data=>{
            console.log(data)
            value = data
            trigger()
        })
        return {
            get() {
                //注意：不能在此处请求接口 会陷入无限循环
                track() //追踪变化
                console.log('get::', value)
                return value
            },
            set(newVal) {
                value = newVal
                trigger() // 触发变化
            }
        }
    })
}
export default {
    
    setup() {
        let state = myRef('../../public/data/list.json')
        return {state}
    }
}
</script>