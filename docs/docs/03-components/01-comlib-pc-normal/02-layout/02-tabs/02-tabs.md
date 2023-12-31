---
title: 标签页
description: 个独立功能或者页面嵌入到一张页面中，通过标签页切换显示
tags:
  - UI组件
---


> **场景**：多个独立功能或者页面嵌入到一张页面中，通过标签页切换显示

Demo：[标签页案例](https://my.mybricks.world/mybricks-app-pcspa/index.html?id=475417124335685)

----

## 基本操作
### 标签外观

默认采用简约外观
#### 简约

![Alt text](./img/image.png)
#### 卡片

![Alt text](./img/image-1.png)
### 标签位置

默认标签位于上部

![Alt text](./img/image-2.png)
#### 标签居中

![Alt text](./img/image-3.png)
### 标签配置
#### 名称

![Alt text](./img/image-4.png)
#### 图标

![Alt text](./img/image-5.png)
#### 提示内容

![Alt text](./img/image-6.png)

说明：提示内容在标签页运行时鼠标移入时显示
#### 事件

-   显示：标签切入（内容显示）时触发执行
-   隐藏：标签切走（内容隐藏）时触发执行

![Alt text](./img/image-7.png)
## 逻辑编排
### 设置默认激活标签

![Alt text](./img/image-8.png)

使用：传入标签序号，默认从0开始
### 标签点击事件

![Alt text](./img/image-9.png)

点击标签页时触发执行，并获取当前点击标签信息
## 样式

聚焦到标签页组件，在样式catelog面板中可以设置标签默认样式，包括标题文本样式，背景色，选中条背景色，边框等
### 默认样式

![Alt text](./img/image-10.png)
### 选中样式

![Alt text](./img/image-11.png)