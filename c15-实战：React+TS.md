[参考链接 >>](https://typescript.bootcss.com/tutorials/react.html)

# 一、项目创建

\1. 安装脚手架工具：

```shell
$ npm install -g create-react-app
```

\2. 创建项目：

```shell
$ create-react-app react-ts-stage1 --template typescript
```

\3. 官方推荐IDE工具「VSCode」，扩展下载：

- Chinese

- ES7 React/Redux/GraphQL/React-Native snippets
- TypeScript Import

# 二、引入React

通过脚手架安装的项目已经为我们配置好了项目及其目录结构，不过过于繁琐，我们现在简化下我们的目录结构，如下所示：

```
react-ts-app                     
    ├── node_modules                
    ├── public
    ├── src
    │   ├── App.tsx
    │   ├── index.css
    │   ├── index.tsx
    ├── .gitignore
    ├── package.json
    ├── README.md
    ├── tsconfig.json
```

App.txs

```react
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
```

# 三、组件声明

首先新建components目录，然后创建一个Link组件，如下所示：

```react
// 文件位置： ./src/components/Link.tsx
import * as React from 'react';

const Link: React.FC = (props: any) => {
    return (
        <div className="link">
            <a href="https://github.com/lihongyao">跳转至GitHub >></a>
        </div>
    )
}

export default Link;
```

> 注意：组件后缀名未 `.tsx`。

接下来在 App组件中引入Hello组件，如下所示：

```react
import React from 'react';
import Link from './components/Link';

const App: React.FC = () => {
  return (
    <div className="App">
      <Link />
    </div>
  );
}

export default App;
```

# 四、数据传递

需求：Link组件的href属性和文本类容由调用者决定，那就意味者当我们在App组件中调用Link组件的时候需要传递属性给Link组件，接下来我们修改Link组件代码：

```react
import * as React from 'react';
interface IProps {
    text: string,
    link: string,
    target?: string
}

const Link: React.FC<IProps> = (props: IProps) => {
    const { text, link } = props;
    return (
        <div className="link">
            <a href={link}>{text}>></a>
        </div>
    )
}

export default Link;
```

然后在App组件中引用Link组件并通过属性传值：

```react
import React from 'react';
import Link from './components/Link';

const App: React.FC = () => {
  return (
    <div className="App">
      <Link text="点击前往GitHub" link="https://github.com/lihongyao" />
    </div>
  );
}

export default App;
```

# 五、状态管理

在函数式组件中，我们无法像在类组件中一样使用`state`和生命钩子函数，但`React`提供了`HOOK`。

```react
import React, { useState } from 'react';

interface IProps {
    text: string,
    link: string,
    target?: string
}
const Link: React.FC<IProps> = (props: IProps) => {
    // 状态管理
    const [count, setCount] = useState(0);
    // 数据传递
    const { text, link } = props;
    return (
        <div className="link">
            <a href={link} onClick={() => setCount(count + 1)}>{text}>></a>
            <p>Click {count} times.</p>
        </div>
    )
}

export default Link;

```

上述示例中，使用了 useState Hook 管理Link组件状态，定义一个 count 状态记录链接点击的次数。

# 六、事件处理

react+ts事件处理和直接使用react一致，我们这里主要讲解父子组件的交互，还是以刚刚的Link组件为例，修改代码如下：

```react
import React, { useState } from 'react';

interface IProps {
    text: string,
    link: string,
    target?: string,
    // +++
    onMyClick: Function
    // +++
}
const Link: React.FC<IProps> = (props: IProps) => {
    // 状态管理
    const [count, setCount] = useState(0);
    // 数据传递
    const { text, link } = props;
    // +++
    function clickHandler() {
        // 发送数据
        props.onMyClick("child msg");
    }
    // +++
    return (
        <div className="link">
            <a href={link} onClick={() => setCount(count + 1)}>{text}>></a>
            <p>Click {count} times.</p>
            {/* +++ */}
            <button onClick={clickHandler}>send msg</button>
             {/* +++ */}
        </div>
    )
}
```

需要注意的是，在IProps里面，我们需要指定事件函数类型，接下来我们修改App.tsx如下：

```react
import React from 'react';
import Link from './components/Link';

const App: React.FC = () => {
  function onMyClickHandler(data: string) {
    console.log(data);
  }
  return (
    <div className="App">
      <Link text="点击前往GitHub" link="https://github.com/lihongyao" onMyClick={onMyClickHandler} />
    </div>
  );
}

export default App;
```

在调用Link组件的时候，传递自定义事件属性，然后在关联的事件函数中打印输出传递过来的数据。

# 七、三方组件

[参考 ant 示例 >>](https://ant.design/docs/react/use-in-typescript-cn)

# 八、路由

安装路由及路由声明：

```shell
$ yarn add react-router react-router-dom @types/react-router-dom
```

> 提示：通过 @types/xxx 来安装三方库的声明文件。

















