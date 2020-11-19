<template>
  <div>
    {{name}} --- {{age}}
    <h2>{{person.name}}</h2>
    <p>{{attr.name}} --- {{attr.age}}</p>
    <p>{{attr1.name}} --- {{attr1.age}} -- {{attr1.hobby}}</p>
    <button @click="handleClick">click me</button>
    <CustomRef/>
  </div>
</template>

<script>
import CustomRef from './components/CustomRef.vue'
import {ref, reactive, onMounted, readonly, shallowReadonly, isReadonly } from 'vue'
export default {
  name: 'App',
  components: {CustomRef},
  setup() {
    let name = ref('sukey')
    let age = ref(20)
    let person = reactive({
      name: 'hele'
    })
    console.log(name,age)
    /**
     * RefImpl {_rawValue: "sukey", _shallow: false, __v_isRef: true, _value: "sukey"}
        __v_isRef: true
        _rawValue: "sukey"
        _shallow: false
        _value: "sukey"
        value: (...)
     */

    console.log(person)
    /**
     * Proxy {name: "hele"}
        [[Handler]]: Object
          deleteProperty: ƒ deleteProperty(target, key)
          get: ƒ (target, key, receiver)
          has: ƒ has(target, key)
          ownKeys: ƒ ownKeys(target)
          set: ƒ (target, key, value, receiver)
          __proto__: Object
        [[Target]]: Object
          name: "hele"
          __proto__: Object
        [[IsRevoked]]: false
     */

    //readonly
    let attr = readonly({name: 'sukey', age: 18})
    let attr1 = shallowReadonly({name: 'sukey', age: 18, hobby: {label: 'read', label1: 'sleep'}})

    onMounted(()=>{
      console.log("onMounted")
    })

    function  handleClick() {
      console.log('attr是否只读：：',isReadonly(attr))
      // this.attr.name = 'zs' // Set operation on key "name" failed: target is readonly.
      this.attr1.hobby.label = 'movie'
      console.log(this.attr1)
    }
    return {name, age, person, attr, attr1, handleClick}
  }
}
</script>
