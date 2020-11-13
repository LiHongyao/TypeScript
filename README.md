- [TypeScript 官方文档 >>](https://www.typescriptlang.org/)
- [TypeScript 中文手册 >>](https://www.tslang.cn/)
- [TypeScript 入门教程 >>](https://ts.xcatliu.com/)

# 一、概述

- TypeScript 语言用于大规模应用的JavaScript开发。
- TypeScript 支持类型，是JavaScript的超集且可以编译成纯JavaScript代码。 
- TypeScript 兼容所有浏览器，所有宿主环境，所有操作系统。 
- TypeScript 是开源的。
- TypeScript 文件后缀名为`.ts`。

# 二、优势

- 类型检查
- 更好的代码提示
- 代码语义更清晰易懂

# 三、环境

1. 安装Node：https://nodejs.org/en/

2. 安装TS

   ```
   $ npm install typescript
   $ yarn add typescript
   ```

   查看版本：

   ```shell
   $ ./node_modules/.bin/tsc --version
   Version 3.7.2
   ```

3. 安装VS插件

   - Prettier - Code formatter

# 四、编译

## 1. 在线编译

http://www.typescriptlang.org/play/index.html

## 2. tsc

```shell
# 编译文件
$ ./node_modules/.bin/tsc index.ts  --outfile index.js
# 编译目录
$ ./node_modules/.bin/tsc ./ts  --outfile ./js
```

## 3. vscode

1. 首先在工程首页自定义 -> 工具和语言中 选择 "Typescript" 进行安装

2. 在终端中进入项目，通过 `tsc -init` 创建 " tsconfig.json" 文件

3. 配置如下：

   ```json
   {
     "compilerOptions" : {
       "target": "es5",
       "outDir": "./",    
     }
   }
   ```

4. 输入快捷键 `ctr/cmd + shfit + b` 选择任务进行编译

## 4. Hbuilder

插件市场安装TypeScript编译工具，鼠标右键 -> 外部命令 -> TS编译



