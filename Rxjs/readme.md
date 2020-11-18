# 深入浅出RxJs
## 第1章 函数响应式编程

### 1.1 一个简单的RxJS例子

### 1.2 函数式编程

### 1.3 响应式编程

### 1.4 Reactive Extension

### 1.5 RxJS是否是函数响应式编程

### 1.6 函数响应式编程的优势

### 1.7 本章小结

## 第2章 RxJS入门

### 2.1 RxJS的版本和运行环境

### 2.2 Observable和Observer
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/@reactivex/rxjs@5.0.0/dist/global/Rx.js"></script>

</head>

<body>
    <script>
        const source$ = new Rx.Observable.of("a","b","c");
        source$.subscribe(console.log);       
    </script>
</body>

</html>
```

```
const onSubscribe = observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
}
const source$ = new Rx.Observable(onSubscribe);
const theObserver = {
    next: item => console.log(item)
}
source$.subscribe(theObserver);
```

### 2.3 退订Observable

### 2.4 Hot Observable和Cold Observable

### 2.5 操作符简介

### 2.6 弹珠图

### 2.7 本章小结

## 第3章 操作符基础

### 3.1 为什么要有操作符

### 3.2 操作符的分类

### 3.3 如何实现操作符

### 3.4 本章小结

## 第4章 创建数据流

### 4.1 创建类操作符

### 4.2 创建同步数据流

### 4.3 创建异步数据的Observable对象

### 4.4 本章小结

## 第5章 合并数据流

### 5.1 合并类操作符

### 5.2 高阶Observable

### 5.3 本章小结

## 第6章 辅助类操作符

### 6.1 数学类操作符

### 6.2 条件布尔类操作符

### 6.3 本章小结

## 第7章 过滤数据流

### 7.1 过滤类操作符的模式

### 7.2 回压控制

### 7.3 其他过滤方式

### 7.4 本章小结

## 第8章 转化数据流

### 8.1 转化类操作符

### 8.2 映射数据

### 8.3 缓存窗口：无损回压控制

### 8.4 高阶的map

### 8.5 数据分组

### 8.6 累计数据

### 8.7 本章小结

## 第9章 异常错误处理

### 9.1 异常处理不可避免

### 9.2 异常处理的难点

### 9.3 RxJS的异常处理

### 9.4 重试的本质

### 9.5 本章小结

## 第10章 多播

### 10.1 数据流的多播

### 10.2 Hot和Cold数据流差异

### 10.3 Subject

### 10.4 支持多播的操作符

### 10.5 高级多播功能

### 10.6 本章小结

## 第11章 掌握时间的Scheduler

### 11.1 Scheduler的调度作用

### 11.2 RxJS提供的Scheduler

### 11.3 Scheduler的工作原理

### 11.4 支持Scheduler的操作符

### 11.5 本章小结

## 第12章 RxJS的调试和测试

### 12.1 调试方法

### 12.2 单元测试

### 12.3 本章小结

## 第13章 用RxJS驱动React

### 13.1 React简介

### 13.2 简单的React应用Counter

### 13.3 利用RxJS管理React状态

### 13.4 本章小结

## 第14章 Redux和RxJS结合

### 14.1 Redux简介

### 14.2 用RxJS实现Redux

### 14.3 Redux和RxJS比较

### 14.4 Redux-Observable:Redux和RxJS的结合

### 14.5 本章小结

## 第15章 RxJS游戏开发

### 15.1 breakout的历史

### 15.2 程序设计

### 15.3 用RxJS实现breakout

### 15.4 本章小结

## 结语

Immutable collections for JavaScript

Immutable data cannot be changed once created, leading to much simpler application development, no defensive copying, and enabling advanced memoization and change detection techniques with simple logic. Persistent data presents a mutative API which does not update the data in-place, but instead always yields new updated data.

