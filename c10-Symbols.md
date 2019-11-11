#  一、概述

ES6 提供了第7中原生数据类型 `Symbol`。

`Symbol()` 函数会返回 symbol 类型的值。每个从`Symbol()`返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的。更进一步的解析见—— [glossary entry for Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)。

# 二、创建

```typescript
let s1 = Symbol();
let s2 = Symbol("name");
let s3 = Symbol("name");
s2 === s3; // => false
let s4 =  new Symbol(); // => Symbol is not a constructor
typeof s1; // => sybmol
```

> 注意：
>
> - Symbol 不可作为构造函数使用
> - symbol值都是唯一的

# 三、应用场景

**\1. 使用Symbol来作为对象属性名(key)**

```typescript
const PROP_NAME = Symbol();
const PROP_TEL  = Symbol();

let user = {
    [PROP_NAME]: "木子李",
    [PROP_TEL]: "17398888669"
}
console.log(user[PROP_NAME]); // => 木子李
console.log(user[PROP_TEL]);  // => 17398888669
```

Symbol类型的key是不能通过 `Object.keys()` 或者 `for...in` 来枚举的，它未被包含在对象自身的属性名集合(property names)之中。所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用Symbol来定义。

也正因为这样一个特性，当使用 `JSON.stringify()` 将对象转换成JSON字符串的时候，Symbol属性也会被排除在输出内容之外。我们可以利用这一特点来更好的设计我们的数据对象，让“对内操作”和“对外选择性输出”变得更加优雅。然而，这样的话，我们就没办法获取以Symbol方式定义的对象属性了么？非也。还是会有一些专门针对Symbol的API，比如：

```typescript
// 使用Object的API
Object.getOwnPropertySymbols(obj) // [Symbol(name)]

// 使用新增的反射API
Reflect.ownKeys(obj) // [Symbol(name), 'age', 'title']
```

**\2. 使用Symbol来替代常量**

 ```typescript
const TYPE_AUDIO = Symbol();
const TYPE_VIDEO = Symbol();
const TYPE_IMAGE = Symbol();
 ```

**\3. 使用Symbol定义类的私有属性/方法**

我们知道在JavaScript中，是没有如Java等面向对象语言的访问控制关键字`private`的，类上所有定义的属性或方法都是可公开访问的。因此这对我们进行API的设计时造成了一些困扰。

而有了`Symbol`以及`模块化机制`，类的私有属性和方法才变成可能。例如：

```js
// => a.js
const PASSWORD = Symbol()
class Login {
  constructor(username, password) {
    this.username = username
    this[PASSWORD] = password
  }
  checkPassword(pwd) {
      return this[PASSWORD] === pwd
  }
}

export default Login
```

# 四、全局Symbol

通常情况下，我们在一个浏览器窗口中（window），使用Symbol()函数来定义和Symbol实例就足够了。但是，如果你的应用涉及到多个window（最典型的就是页面中使用了\<iframe>），并需要这些window中使用的某些Symbol是同一个，那就不能使用Symbol()函数了，因为用它在不同window中创建的Symbol实例总是唯一的，而我们需要的是在所有这些window环境下保持一个共享的Symbol。这种情况下，我们就需要使用另一个API来创建或获取Symbol，那就是Symbol.for()，它可以注册或获取一个window间全局的Symbol实例：

```js
let gs1 = Symbol.for('global_symbol_1')  //注册一个全局Symbol
let gs2 = Symbol.for('global_symbol_1')  //获取全局Symbol	
gs1 === gs2  // true
```

这样一个Symbol不光在单个window中是唯一的，在多个相关window间也是唯一的了。