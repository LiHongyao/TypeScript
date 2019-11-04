"use strict";
/**
 * # 数据类型
 */
// 1. 布尔类型
var isLogin = true;
// 2. 数字
var age = 18;
var PI = 3.14;
// 3. 字符串
var s1 = 'Hello, ts!';
var s2 = "Hello, ts!";
var s3 = "Hello, ts!";
// 4. 数组
var nums = [1, 2, 3, 4];
var list = [1, 2, 3, 4];
// 5. 元组
var infos;
infos = ["petter", 28]; // ok
//  infos = [28, "petter"]; // error
infos[0].slice(0);
//  infos[1].slice(1);
// 6. 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName);
// 7. 任意值
var arr = [1, "2", true];
// 8. 类型断言
var msg = "hello, world!";
var len = msg.length;
