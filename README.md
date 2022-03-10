# tinyjsuse

一款面向业务场景的 js 工具类库, 目前已支持:

- copy
- fullscreen
- cookie
- debounce
- throttle
- isObject
- url2params (待完善)

等等开发中常用的工具函数, 轻松提高业务研发效率.

## Install

```
  npm i tinyjsuse
```


## API Doc

[tinyjsutils 文档](https://zerocsss.github.io/tinyjsuse/)

## copy

> 基于浏览器 execCommand 进行的封装

Demo:

```tsx
/**
 * title: 复制
 */
import { copy } from 'tinyjsuse';

```                                                      
## 自动构建新工具函数
将自动在modules和test文件夹下创建模板

```
  npm run add xxx
```