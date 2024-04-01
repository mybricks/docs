---
title: 下载后的页面如何在项目中使用
---

# 如何下载
- 页面发布之后，可以在左侧发布记录中找到下载按钮

# 下载后的页面如何在项目中使用

- 页面下载的zip包内包含3个文件，各文件使用方法如下

![alt text](img/image.png)


# html页面
- 方式一：部署成静态页面直接访问
- 方式二：部署成静态页面之后，在项目中通过qiankun等微前端框架引入

# 作为React组件在项目中引入

``` ts
import React from 'react'
import Page from './549439123873861-app'
import { createRoot } from 'react-dom/client';
const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<Page />)
```

# 作为Vue组件在项目中引入

``` ts
import { createApp } from 'vue';
import Page from './549439123873861-app-vue3.vue'
const app = createApp(Page)
app.mount('#app');
```

