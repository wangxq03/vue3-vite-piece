## vue3.0 快速上手

1. vue-cli
2. webpack
3. vite (
   利用 ES6 的 import 会发生请求去加载文件的特性，拦截这些请求，做些预编译，省去 webpack 冗长的打包时间
   安装 vite: npm install -g create-vite-app
   创建项目： create-vite-app projectName
   ...

## 附录

```
export const enum PatchFlags {
  TEXT = 1, // 动态文本节点
  CLASS = 1 << 1,  // 2  动态class
  STYLE = 1 << 2,  // 4  动态style
  PROPS = 1 << 3,  // 8  动态属性 不包括类名和样式
  FULL_PROPS = 1 << 4,  // 16  具有动态 key属性， 当key改变时 需要进行完整的diff比较
  HYDRATE_EVENTS = 1 << 5,  // 32  带有监听事件的界定啊
  STABLE_FRAGMENT = 1 << 6,  // 64 不会改变子节点顺序的fragment
  KEYED_FRAGMENT = 1 << 7,  // 128  带有key属性的fragment 或部分子节点有key
  UNKEYED_FRAGMENT = 1 << 8,  // 256  子节点没有key 的fragment
  NEED_PATCH = 1 << 9,  // 512  一个界定啊只会进行非props比较
}
```
