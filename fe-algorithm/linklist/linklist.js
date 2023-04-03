class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(val) {
    const node = new Node(val);
    let p = this.head;
    if (this.head) {
      // 找到链表最后一个节点 把这个节点的.next属性赋值为node
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    } else {
      // 如果没有head节点, 链表是空的,把要创建的节点,赋值给head
      this.head = node;
    }
    this.length++;
  }
  print() {
    let p = this.head;
    let result = "";
    if (this.head) {
      do {
        result += `${p.val}=>`;
        p = p.next;
      } while (p.next);
      result += p.val;
      return result;
    } else {
      console.log("empty");
    }
  }
}
// 1=>2=>3
const linkList = new LinkNodeList();

linkList.append(1);
linkList.append(2);
linkList.append(3);
console.log("内容:", linkList.print());
console.log("长度:", linkList.length);
