/**
 * # 数据类型
 */

 // 1. 布尔类型
 let isLogin: boolean = true;
 
 // 2. 数字
 let age:number = 18;
 let PI:number  = 3.14;

 // 3. 字符串
 let s1:string = 'Hello, ts!';
 let s2:string = "Hello, ts!";
 let s3:string = `Hello, ts!`;

 // 4. 数组
 let nums:number[] = [1, 2, 3, 4];
 let list:Array<number> = [1, 2, 3, 4];

 // 5. 元组
 
 let infos: [string, number];

 infos = ["petter", 28]; // ok
 //  infos = [28, "petter"]; // error

 infos[0].slice(0);
//  infos[1].slice(1);

// 6. 枚举

enum Color { Red = 1, Green, Blue }
let colorName: string = Color[2];
console.log(colorName);


// 7. 任意值
let arr:Array<any> = [1, "2", true];

// 8. 类型断言
let msg:any = "hello, world!";
let len: number  = (msg as string).length;



