- typescript 中文手册：https://www.tslang.net/
- https://ts.xcatliu.com/

# 一、概述

- TypeScript语言用于大规模应用的JavaScript开发。

- TypeScript支持类型，是JavaScript的超集且可以编译成纯JavaScript代码。 
- TypeScript兼容所有浏览器，所有宿主环境，所有操作系统。 
- TypeScript是开源的。

TypeScript目前还在积极的开发完善之中，不断地会有新的特性加入进来。 因此本手册也会紧随官方的每个commit，不断地更新新的章节以及修改措词不妥之处。

# 二、安装

```shell
$ npm install typescript
$ yarn add typescript
```

查看版本：

```shell
$ ./node_modules/.bin/tsc --version
Version 3.6.4
```

# 三、编译

http://www.typescriptlang.org/play/index.html

## 1. tsc

```shell
# 编译文件
$ ./node_modules/.bin/tsc index.ts  --outfile index.js
# 编译目录
$ ./node_modules/.bin/tsc ./ts  --outfile ./js
```

## 2. vscode

1. 首先在工程首页自定义 -> 工具和语言中 选择 "Typescript" 进行安装

2. 在终端中进入项目，通过 `tsc -init` 创建 " tsconfig.json" 文件

3. 配置如下：

   ```json
   {
     "compilerOptions" : {
       "target": "es5", // 编译目标平台
       "outDir": "./",    // 输出目录
     }
   }
   ```

4. 输入快捷键 `ctr/cmd + shfit + b` 选择任务进行编译





