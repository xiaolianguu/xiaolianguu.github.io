# JavaScript 入门指南

JavaScript 是目前最流行的编程语言之一，它可以让网页变得动态和交互。本文将带你快速入门 JavaScript。

## 什么是 JavaScript？

JavaScript 是一种高级的、解释型的编程语言，主要用于：

- 网页交互
- 前端开发
- 后端开发（Node.js）
- 移动应用开发
- 游戏开发

## 基础语法

### 变量声明

JavaScript 有三种声明变量的方式：

```javascript
// 使用 let（推荐）
let name = "小梁";

// 使用 const（常量）
const PI = 3.14159;

// 使用 var（旧方式，不推荐）
var age = 25;
```

### 数据类型

JavaScript 有以下几种基本数据类型：

```javascript
// 数字
let number = 42;

// 字符串
let text = "Hello World";

// 布尔值
let isTrue = true;

// 数组
let colors = ["red", "green", "blue"];

// 对象
let person = {
  name: "小梁",
  age: 25,
  city: "北京"
};

// 空值
let empty = null;
let notDefined = undefined;
```

### 函数

函数是可重用的代码块：

```javascript
// 函数声明
function greet(name) {
  return `你好，${name}！`;
}

// 箭头函数（现代写法）
const greet = (name) => {
  return `你好，${name}！`;
};

// 简化的箭头函数
const greet = name => `你好，${name}！`;

// 调用函数
console.log(greet("小梁")); // 输出：你好，小梁！
```

### 条件语句

```javascript
let score = 85;

if (score >= 90) {
  console.log("优秀");
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}

// 三元运算符
let result = score >= 60 ? "及格" : "不及格";
```

### 循环

```javascript
// for 循环
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while 循环
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// 遍历数组
let fruits = ["苹果", "香蕉", "橙子"];
fruits.forEach(fruit => {
  console.log(fruit);
});
```

## 常用操作

### 数组操作

```javascript
let numbers = [1, 2, 3, 4, 5];

// 添加元素
numbers.push(6); // [1, 2, 3, 4, 5, 6]

// 删除最后一个元素
numbers.pop(); // [1, 2, 3, 4, 5]

// 过滤
let evenNumbers = numbers.filter(n => n % 2 === 0); // [2, 4]

// 映射
let doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// 查找
let found = numbers.find(n => n > 3); // 4
```

### DOM 操作

```javascript
// 选择元素
let element = document.querySelector('.my-class');
let elements = document.querySelectorAll('.my-class');

// 修改内容
element.textContent = '新内容';
element.innerHTML = '<strong>加粗文本</strong>';

// 修改样式
element.style.color = 'blue';
element.classList.add('active');

// 事件监听
element.addEventListener('click', () => {
  console.log('元素被点击了！');
});
```

## 实践项目：待办清单

让我们创建一个简单的待办清单应用：

```javascript
// HTML
// <input id="todoInput" type="text" placeholder="输入待办事项">
// <button id="addBtn">添加</button>
// <ul id="todoList"></ul>

const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  
  if (text) {
    const li = document.createElement('li');
    li.textContent = text;
    
    li.addEventListener('click', () => {
      li.style.textDecoration = 'line-through';
    });
    
    list.appendChild(li);
    input.value = '';
  }
});
```

## 学习资源

- [MDN Web Docs](https://developer.mozilla.org/zh-CN/) - 最权威的 JavaScript 文档
- [JavaScript.info](https://javascript.info/) - 现代 JavaScript 教程
- [FreeCodeCamp](https://www.freecodecamp.org/) - 免费编程课程

## 总结

这篇文章介绍了 JavaScript 的基础知识，包括：

- 变量和数据类型
- 函数和条件语句
- 循环和数组操作
- DOM 操作

继续练习，多写代码，你会越来越熟练！加油！💪
