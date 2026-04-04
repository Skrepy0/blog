---
icon: ic:outline-bug-report
date: 2026-04-04
star: true   # 星标测试QAQ
excerpt: Blog测试-摘要
category:
  - 开发
  - 项目
tag:
  - 测试
---

# Blog测试
**我的第一篇Blog，献给了debug \(**

## 自定义组件测试：
<p style="text-align:center">
计数器：<Test/>
</p>

## MarkDown测试：
### 标题
# h1
## h2
### h3
#### h4
##### h5
###### h6

### 格式化
 
>引用

**加粗**，*倾斜*，==高亮==

#### 无序列表
- 1
- 2
- 3

#### 有序列表
1. 1
2. 2
3. 3

### 代码块
```java
static boolean isPrime(int n) {  
    if (n <= 1) return false;  
    if (n == 2) return true;  
    if (n % 2 == 0) return false;  
    for (int i = 3; i * i <= n; i += 2) {  
        if (n % i == 0) return false;  
    }  
    return true;  
}
```

::: code-tabs

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::

### Tex语法测试
$$
E = \left[\begin{matrix}
1&0&0\\
0&1&0\\
0&0&1
\end{matrix}\right]
$$

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$
::: warning
这里查出Bug，已经修复
:::
### 表格测试
| 序号  | B   | C   | G   | H   | 条件 1 | 条件 2 | 条件 3 | 条件 4 | 全部满足 |
| --- | --- | --- | --- | --- | ---- | ---- | ---- | ---- | ---- |
| 1   | T   | T   | T   | T   | F    | F    | T    | F    | ❌    |
| 2   | T   | T   | T   | F   | F    | F    | T    | T    | ❌    |
| 3   | T   | T   | F   | T   | F    | T    | T    | F    | ❌    |
| 4   | T   | T   | F   | F   | F    | T    | F    | T    | ❌    |
| 5   | T   | F   | T   | T   | F    | T    | T    | T    | ❌    |
| 6   | T   | F   | T   | F   | F    | T    | T    | T    | ❌    |
| 7   | T   | F   | F   | T   | F    | T    | T    | T    | ❌    |
| 8   | T   | F   | F   | F   | F    | T    | F    | T    | ❌    |
| 9   | F   | T   | T   | T   | T    | F    | T    | F    | ❌    |
| 10  | F   | T   | T   | F   | T    | F    | T    | T    | ❌    |
| 11  | F   | T   | F   | T   | T    | T    | T    | F    | ❌    |
| 12  | F   | T   | F   | F   | T    | T    | F    | T    | ❌    |
| 13  | F   | F   | T   | T   | T    | T    | T    | T    | ✅    |
| 14  | F   | F   | T   | F   | T    | T    | T    | T    | ✅    |
| 15  | F   | F   | F   | T   | T    | T    | T    | T    | ✅    |
| 16  | F   | F   | F   | F   | T    | T    | F    | T    | ❌    |
|     |     |     |     |     |      |      |      |      |      |

#### 提示容器

::: v-pre

安全的在 Markdown 中使用 {{ variable }}。

:::

::: info 自定义标题

信息容器，包含 `代码` 与 [链接](#提示容器)。

```js
const a = 1;
```

:::

::: tip 自定义标题

提示容器

:::

::: warning 自定义标题

警告容器

:::

::: caution 自定义标题

危险容器

:::

::: details 自定义标题

详情容器

:::
### 选项卡测试

::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

### 自定义对齐

::: center

我是居中的

:::

::: right

我在右对齐

:::

### PlantUML测试

@startuml
Alice -> Bob: 认证请求

alt 成功情况

    Bob -> Alice: 认证接受

else 某种失败情况

    Bob -> Alice: 认证失败
    group 我自己的标签
    Alice -> Log : 开始记录攻击日志
        loop 1000次
            Alice -> Bob: DNS 攻击
        end
    Alice -> Log : 结束记录攻击日志
    end

else 另一种失败

    Bob -> Alice: 请重复

end
@enduml

### 代码演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html" width="100%" height="450"/>

### 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html" width="100%" height="480"/>


#### Kotlin 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html" width="100%" height="220"/>


#### Sandpack 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html" width="100%" height="380"/>


#### Vue 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html" width="100%" height="380"/>


### 其他测试
此文字有脚注[^asd].
[^asd]: 这是脚注内容

[Me!](https:/github.com/Skrepy0/)

[![Minecraft](https://img.shields.io/badge/Minecraft-1.21.1-brightgreen?style=flat-square)](https://minecraft.net)

<img src="/assets/images/test.jpg" width=300/ alt="图片测试">

`test` _Recommended_
!!剧透!!
19^th^ H~2~O

- [x] 计划 1
- [ ] 计划 2
