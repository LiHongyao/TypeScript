/*
 * @Author: Lee
 * @Date: 2021-12-29 13:21:32
 * @LastEditors: Lee
 * @LastEditTime: 2021-12-29 14:12:05
 */

// -- 定义接口
interface IProps {
  name: string;
  age: number;
  job: string;
}
// -- 定义一个遍历，实现IProps接口
const usr: IProps = {
  name: 'Li-HONGYAO',
  age: 18,
  job: '前端工程师',
};
// -- 输出变量
console.log(usr);
