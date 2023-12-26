---
description: 全局展示loading
sidebar_position: 1005
---

![Alt text](img/image.png)

> 应用场景1：接口未返回数据，需要展示加载状态\
应用场景2：页面出现问题，需要过渡\
应用场景3：其他页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。\
注：计算组件，可以在连线后的逻辑组件中找到


Demo地址：[【全局Loading】基本使用](https://my.mybricks.world/mybricks-app-pcspa/index.html?id=472220172742725)

----

## 基本操作
### 全局Loading
#### Loading文案
提示文案的内容

![Alt text](img/image-1.png)

#### 尺寸
加载图标的尺寸大小

![Alt text](img/image-2.png)

#### 间距
相对于整个屏幕的相对位置

![Alt text](img/image-3.png)

#### 关闭
开启关闭,连线关闭全局Loading

![Alt text](img/image-4.png)

----

## 逻辑编排
### 开启加载
连线到全局loading，当步骤执行到时会触发全局加载

### 结束加载
打开关闭开关,连线到全局loading，当步骤执行到时会触发关闭

----
## 样式
### 字体
![Alt text](img/image-5.png)

### 遮罩
![Alt text](img/image-6.png)