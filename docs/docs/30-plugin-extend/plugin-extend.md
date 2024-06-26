---
title: AI插件开发
---

:::tip
本章节以AI插件开发为例，帮助你了解如何开发自定义插件，扩展设计器功能，实现一些个性化的业务需求。
:::

## 插件演示
如下图，用户可以通过AI插件里面的文本输入框，输入一段包含业务诉求的文本（添加一个普通按钮，风格是主按钮，中尺寸，标题是添加活动），点击“生成”按钮，AI插件会自动生成组件。

### 插件区域描述
![alt text](img/image-3.png)

### 动态演示效果
![alt text](<img/2024-02-28 14.27.10.gif>)


## 如何开发一个AI插件

![alt text](img/image-4.png)

### AI插件的思路
AI插件的目标：根据用户输入的自然语言，生成相应的组件，具体会分下面三步
- 用户输入需求，点击“生成”按钮
- 将用户需求组装成提示词，给到大模型并返回固定结构的Json
- 通过搭建引擎提供的API使用Json自动生成内容（这里使用的api是command）

### 插件的定义和实现
插件是一种可以扩展设计器功能的方式，它可以通过apiSet来调用设计器的api，实现一些个性化的业务需求。插件的开发需要遵循一定的规范，具体如下：
- 插件需要定义一个：
  - 唯一的namespaces，用于区分不同的插件
  - contributes对象，用于声明插件的功能
  - render方法，用于渲染插件的UI
  - apiSet，用于声明插件所需的api
  - icon，用于展示插件的图标
  - ……

#### 插件入口文件示例
```javascript
import AIPlugin from './ai-plugin'
import icon from './icon.png'
export default function AIPlugin() {
    return {
        name: '@mybricks/ai-plugin',//分配一个唯一的namespaces
        title: 'AI',//插件名称
        author: 'mybricks',//作者
        version: '1.0.0',//版本号
        description: 'AI插件',//插件描述
        contributes: {
            sliderView: {
                //在侧边栏拓展一个Tab
                tab: {
                    title:'AI Copilot',//显示在侧边栏的插件名称
                    apiSet:['command'],//[重要]插件声明所需的apiSet，这里由于是AI驱动页面搭建，所以使用了可以操作页面的api：command
                    icon:icon,//插件图标
                    render(args: any) {
                        return <AIPlugin {...args}></AIPlugin> //这里放置插件的UI
                    }
                }
            }
        }
    }
}
```


#### 插件具体代码示例
```javascript
export default function AIPlugin({command}) {
    //这里只展示了插件的UI、以及apiSet如何开发使用，具体的业务逻辑需要根据实际需求进行定制

    //下面是由AI生成好的，准备添加到页面的组件scheme（可以根据市面上各类大模型的情况，自行选择从自然语言生成到Json的方式）
    const component = {
    "data": [
        {
            "type": "mybricks.normal-pc.custom-button",
            "data": {
                "text": "打开详情",
                "type": "default",
                "style": {
                    "backgroundColor": "#1890ff",
                    "borderRadius": "15px"
                }
            },
            "slots": null
        }
    ]
}

    return (
        //插件主体UI
        <div className={css.container}>
            <input type="text" placeholder="请输入你的搭建诉求"/>
            {/* 这里展示了如何使用插件apiSet的command方法 */}
            <button onClick={() => {
                command.exec("ui.addComs", component);
            }}>生成</button>
        </div>
    )
}

```

### 引入插件
#### 设计器引入
```javascript
import AIPlugin from './ai-plugin'
export default function App() {
    return (
        <SPADesigner
            config={{
                /* 其他配置项省略*/
                plugins: [
                    AIPlugin()
                ]
            }}
        /* 其他配置项省略*/
        />
    )
}
```


