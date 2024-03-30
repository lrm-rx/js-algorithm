// 栈结构 - 特点: 后进先出
export default class Stack {
  constructor() {
    this.items = [];
  }

  // push  压栈
  push(item) {
    this.items.push(item);
  }

  // pop 出栈-返回出栈的元素
  pop() {
    if(this.isEmpty()) throw new Error("空栈!");
    return this.items.pop();
  }

  // isEmpty() 判断是否为空 - 返回布尔值
  isEmpty() {
    return this.items.length === 0;
  }

  // peek() 查看栈顶的元素
  peek() {
    if(this.isEmpty()) throw new Error("空栈!");
    return this.items[this.items.length - 1];
  }

  // size() 获取栈中元素的个数
  size() {
    return this.items.length;
  }

  // toString() 以字符串形式返回栈内元素
  toString() {
    let res = "";
    for (const item of this.items) {
      res += item + " ";
    }
    return res;
  }
}