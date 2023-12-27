---
title: 菜单
description: 下拉弹出的列表
sidebar_position: 1005
tags:
  - UI组件
---

![Alt text](img/out-0.png)
![Alt text](img/out-1.png)

> **应用场景**\
场景1：顶部导航提供全局性的类目和功能\
场景2：侧边导航提供多级结构来收纳和排列网站架构

Demo地址：[【菜单】基本使用](https://my.mybricks.world/mybricks-app-pcspa/index.html?id=473206175535173)

----

## 基本操作
### 菜单
#### 静态数据

![Alt text](img/out-2.png)

静态配置数据，点击【添加一项】可添加，点击【编辑图标】可进行具体配置，点击【删除图标】可删除对应菜单项。

![Alt text](img/out-3.png)

子项配置包括，【标题】【唯一标识】【默认激活】【类型】

注：类型-父菜单 和 默认激活 互斥
#### 样式

> 三种样式切换，水平｜垂直｜内联

![Alt text](img/out-4.png)

![Alt text](img/out-5.png)
##### 1）水平

![Alt text](img/out-6.png)
##### 2）垂直

![Alt text](img/out-7.png)
##### 3）内联

![Alt text](img/out-8.png)
### 菜单项
#### 标题

![Alt text](img/out-9.png)

 **唯一标识** 

![Alt text](img/out-10.png)
#### 默认激活

![Alt text](img/out-11.png)

注：类型-父菜单 和 默认激活 互斥
#### 图标

![Alt text](img/out-12.png)

开启后可以自定义选择图标
#### 类型

类型可以选择 子菜单｜父菜单

![Alt text](img/out-13.png)

![Alt text](img/out-14.png)

  

切换至父菜单后，可以配置子项

![Alt text](img/out-15.png)

子项配置，点击【添加一项】可添加子菜单，点击【编辑图标】可进行具体子菜单配置，点击【删除图标】可删除对应菜单项。

![Alt text](img/out-16.png)

且在类型位置，可以切换类型，子菜单｜分组菜单

若子项的分组菜单类型，可以继续配置分组菜单子项，【添加一项】【编辑】【删除】

![Alt text](img/out-17.png)

  

综上，可以总结出菜单项的结构关系：

![Alt text](img/out-18.png)

在添加每一项子菜单时，同时会添加出对应的子菜单的点击事件。
## 逻辑编排
#### 菜单点击

整个菜单的点击事件

![Alt text](img/out-19.png)

对应输出子项数据

![Alt text](img/out-20.png)
#### 菜单项点击

聚焦到菜单项，可以看到不同类别的菜单项点击事件，此处提供了分类。

![Alt text](img/out-21.png)
#### 设置数据和选中项

![Alt text](img/out-22.png)

这里可以依照对应的数据结构设置数据和选中项。

![Alt text](img/out-23.png)
#### 设置选中项

![Alt text](img/out-24.png)

  

 **获取选中项** 

可以通过创建的事件，获取选中项

![Alt text](img/out-25.png)
## 样式