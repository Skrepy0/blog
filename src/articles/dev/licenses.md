---
title: 如何选择开源许可证?
icon: material-symbols:license
date: 2026-04-08
excerpt: 选开源许可证没那么复杂,本文用一张决策流程图帮你快速找到最适合的协议。
category:
  - 开发
  - 学习
tag:
  - License
---

每次在 GitHub 新建仓库，看到那一长串许可证选项，是不是都随手选个 MIT 或者干脆空着？然而没有许可证意味着代码受版权法全面保护，别人想用都用不了，这在法律上等同于“闭源”。

但许可证那么多，MIT、Apache、GPL、AGPL……到底该选哪个？下面我们就着手解决这个问题。

## 一张决策流程图：

不妨直接按下面流程图走一遍,自然就知道该用哪一个许可证了

@startuml
!theme plain
skinparam backgroundColor transparent
skinparam defaultFontName "Microsoft YaHei"

skinparam defaultFontColor #33ac8a
skinparam activityBackgroundColor transparent
skinparam activityBorderColor #1ABC9C
skinparam arrowColor #16A085
skinparam diamondBorderColor #1ABC9C
skinparam startColor #1ABC9C
skinparam endColor #1ABC9C

start
:我的项目选择哪种开源协议？;

' Step 0：是否真的要开源
if (是否允许他人使用/修改代码？) then (否)
    :不添加 LICENSE\n= 默认闭源;
    stop
endif

' Step 1：传播 vs 控制
if (首要目标是什么？) then (最大限度传播\n降低使用门槛)

    if (是否涉及专利/算法/企业合作？) then (是)
        :Apache 2.0\n(含专利授权保护);
    else (否)
        :MIT\n(最宽松);
    endif

elseif (希望别人必须回馈开源\n构建生态)

    if (项目运行形式？) then (Web/SaaS/云服务)
        :AGPL v3\n(防止云厂商闭源使用);
    else (桌面软件/分发程序)
        :GPL v3\n(强 Copyleft);
    endif

else (希望被商业使用\n但控制修改范围)

    if (项目类型？) then (函数库/SDK)

        if (是否允许闭源软件调用？) then (是)
            :LGPL v2.1/v3\n(仅库修改需开源);
        else (否)
            :GPL v3;
        endif

    else (模块化工程/组件系统)
        :MPL 2.0\n(文件级开源);
    endif

endif

' Step 2：依赖约束（关键补充）
if (是否依赖 GPL 代码？) then (是)
    :⚠ 必须使用 GPL 兼容协议;
endif

if (是否依赖 Apache 2.0？) then (是)
    :⚠ 避免使用 GPL v2;
endif

' Step 3：多人协作
if (是否接受外部贡献？) then (是)
    :建议添加 CLA\n(避免未来协议纠纷);
endif

' Step 4：最终检查
:最终确认：
- 是否允许商业使用？
- 是否允许闭源？
- 是否需要专利保护？;

stop
@enduml

## 各协议一句话口诀

记住这几句，比长篇分析更高效：

* **MIT**：随便用，保留署名，不承担责任。
* **Apache 2.0**：随便用，附带专利授权，修改需说明。
* **GPL**：使用或修改后，整体必须开源。
* **AGPL**：通过网络提供服务，也必须开源。
* **LGPL**：可被闭源软件调用，修改库本身需开源。
* **MPL 2.0**：仅修改过的文件必须开源。

---

## 各协议详细速览

如果不仅是选择，还想理解差异，可以快速看这一节。

### 宽松型协议：低限制，高传播

| 协议             | 核心要求               | 典型项目               | 适用场景            |
| -------------- | ------------------ | ------------------ | --------------- |
| MIT            | 保留版权声明             | React、Vue、Node.js  | 个人项目、工具库，追求最大传播 |
| Apache 2.0     | 保留版权 + 标注修改 + 专利授权 | Kubernetes、Android | 企业项目、涉及专利或商业合作  |
| BSD 2/3-Clause | 类似 MIT，附加署名限制      | FreeBSD、Nginx      | 学术、系统底层或嵌入式开发   |

**说明：**
MIT **不包含专利授权**；Apache 2.0 明确**包含专利授权与反诉保护**。如果项目涉及算法、通信协议或硬件，优先考虑 Apache 2.0。

---

### Copyleft 协议：强调回馈与开放

| 协议        | 影响范围   | 典型项目                | 适用场景               |
| --------- | ------ | ------------------- | ------------------ |
| GPL v2/v3 | 整个衍生项目 | Linux、Git、WordPress | 基础软件，希望所有改动都回流开源   |
| AGPL v3   | 包含网络服务 | Nextcloud           | Web/SaaS，防止服务端闭源使用 |
| LGPL      | 仅库本身   | FFmpeg、GTK          | 共享库，希望被广泛调用        |
| MPL 2.0   | 文件级    | Firefox             | 模块化项目，平衡开源与商业使用    |

---
## 各个协议具体内容
下面是对上文表格中每一个协议的具体展开解释

### 一、宽松型协议详解

这类协议对代码的使用、修改和分发限制极少，商业集成门槛最低，是追求**广泛传播**和**生态建设**的首选。

#### 1. MIT 许可证

- **核心内容**：MIT 是开源世界最简洁的许可证。使用者被授予免费使用、复制、修改、合并、出版发行、再授权及销售软件副本的权利，**唯一条件是**：在所有副本或实质部分中必须包含原始版权声明和许可声明。(说白了就是:**"你随便用，想怎么改就怎么改，甚至拿去卖钱都行，唯一的要求是：别把作者的版权声明给删了"**)
- **影响范围**：无任何“传染性”。你可以把 MIT 代码改写成闭源商业软件出售，无需公开修改后的源代码。
- **专利风险提示**：MIT 协议诞生于上世纪 80 年代，**不包含明确的专利授权条款**。如果原作者拥有某项软件专利且未明示授权，使用者理论上存在被起诉侵权的法律风险（尽管开源社区通常默认隐含专利授权，但法律上存在争议）。若项目涉及硬核算法或通信协议，Apache 2.0 是更严密的选择。
- **适用直觉**：适合“我希望全世界用我的代码的人越多越好，哪怕他们拿去卖钱不告诉我”的开发者。
<LinkBox
    url="https://mit-license.org/" 
    title="MIT许可证"
    subtitle="MIT LICENSE官网"/>

#### 2. Apache License 2.0

- **核心内容**：在 MIT 的宽松基础上增加了**三重企业级保护**：
    1.  **明确的专利授权**：贡献者授予使用者**永久、全球、免费的专利许可**，且一旦有人对使用者提起专利诉讼（指控该代码侵权），其获得的专利授权**自动终止**（反专利流氓条款）。
    2.  **修改声明义务**：如果修改了源文件，必须在文件中添加醒目的修改声明。
    3.  **NOTICE 文件保留**：必须保留项目原本的 NOTICE 文件[^notice]（通常列出第三方依赖和归属）。

(通俗来讲就是:**"MIT 的“随便用”基础上，再白送你一个“专利保护盾”，并提醒你改过的代码要留个记号。"**)
- **影响范围**：依然宽松，允许闭源商用，但增加了对修改记录的透明性要求。
- **适用直觉**：适合“我是大公司或希望和大公司合作，我要在法律上保护好自己和用户，防止因为专利问题被人告到破产”的场景。
<LinkBox
    url="https://www.apache.org/licenses/LICENSE-2.0" 
    title="Apache License 2.0许可证"
    subtitle="Apache License 2.0官网"/>

#### 3. BSD 2-Clause / 3-Clause

- **核心内容**：
    - **2-Clause**：与 MIT 几乎等价，仅要求**保留版权声明和免责条款**。
    - **3-Clause**：比 MIT 多了一句**“禁止未经特别书面许可使用本软件的名字或贡献者名字来背书衍生产品”**。这防止了商业公司打着“FreeBSD 团队强力推荐”的旗号卖自己的软件。(总的说,3-Clause在MIT的基础上**额外禁止借项目名义进行商业背书，保护品牌不被滥用。**)
- **适用直觉**：适合学术机构或大型系统底层组件。如果你不希望别人拿你的名号去骗人，选 BSD 3-Clause。

<LinkBox
    url="https://opensource.org/license/BSD-2-Clause" 
    title="BSD 2-Clause许可证"
    subtitle="BSD 2-Clause内容"/>
<LinkBox
    url="https://opensource.org/license/BSD-3-Clause" 
    title="BSD 3-Clause许可证"
    subtitle="BSD 3-Clause内容"/>

---

### 二、Copyleft 协议详解

这类协议的核心逻辑是 **“自由必须延续”**。**代码不能简单地被拿走变成私有财产**，衍生作品**必须保持同样的开源自由**。

#### 1. GPL v2 / v3 (GNU General Public License)

- **核心内容**：GPL 是开源世界的“宪法”。其核心机制是 **“Copyleft 传染性”**：
    > 任何基于 GPL 代码的衍生作品（修改、扩展、链接），在**分发**给用户时，**整个衍生作品**必须同样以 GPL 协议开源。
- **v2 与 v3 的关键区别**：
    - **GPLv2**：经典版本，Linux 内核以此协议发布。存在 **“Tivoization”（硬件锁定）** 漏洞——厂商可以在硬件上运行修改过的 GPLv2 代码，但通过数字签名阻止用户运行修改后的版本。
    - **GPLv3**：修补了硬件锁定漏洞，增加了明确的**专利反制条款**，并与 Apache 2.0 兼容。
- **适用直觉**：适合“我不允许任何人把我的代码私有化。如果你想用我的代码，你的代码也必须交给社区”。
<LinkBox
    url="https://www.gnu.org/licenses/old-licenses/gpl-2.0.html" 
    title="GPL v2许可证"
    subtitle="GPL v2内容"/>

<LinkBox
    url="https://www.gnu.org/licenses/gpl-3.0.html" 
    title="GPL v3许可证"
    subtitle="GPL v3内容"/>

#### 2. AGPL v3 (GNU Affero General Public License)

- **核心内容**：AGPL 是 GPL 的 **“云服务补丁”**。
    - **背景漏洞**：GPL 的触发条件是 **“分发”**。如果你用 GPL 代码做了一个网站后台，你并没有把软件分发出去，只是在服务器上运行它。因此，云厂商（如 AWS）可以魔改开源数据库且不用公开修改后的代码。
    - **AGPL 的强制要求**：即使你**不分发**软件，只要你**通过网络提供服务**（SaaS），用户依然有权要求你提供该服务的**完整源代码**。
- **适用直觉**：适合“我做的是后端服务或数据库，我不想让云大厂把我的代码拿去改改卖钱却不回馈社区”。

<LinkBox
    url="https://www.gnu.org/licenses/agpl.html"
    title="AGPL v3许可证"
    subtitle="AGPL v3内容"
/>

#### 3. LGPL (GNU Lesser General Public License)

- **核心内容**：LGPL 是 GPL 的 **“弱传染”** 版本，专为共享库设计。
    - **允许闭源调用**：商业软件可以通过**动态链接**的方式调用 LGPL 库，**不需要开源自己的商业代码**。
    - **仅修改库需开源**：如果开发者修改了 LGPL 库**本身的源代码**，修改部分必须开源；如果只是调用 API，则无影响。
- **适用直觉**：适合“我希望我的库打败闭源竞品成为事实标准，但又不想吓跑那些不敢用 GPL 的商业公司”。

<LinkBox
    url="https://www.gnu.org/licenses/lgpl-3.0.html"
    title="LGPLv3许可证"
    subtitle="LGPLv3内容"
/>

<LinkBox
    url="https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html"
    title="LGPLv2.1许可证"
    subtitle="LGPLv2.1内容"
/>

#### 4. MPL 2.0 (Mozilla Public License)

- **核心内容**：MPL 2.0 实现了 **“文件级 Copyleft”**。这是 GPL 和 MIT 之间的精妙平衡点。
    - **传染边界是文件**：对于 MPL 代码所在的**单个文件**，如果你修改了它，该文件必须保持 MPL 协议开源。
    - **新增文件自由**：你在项目中**新增的文件**，或者与 MPL 代码**链接的专有代码文件**，**可以闭源**。
- **适用直觉**：适合“我不想强迫别人把整个软件都开源（像 GPL），但我也不能容忍别人直接在我的核心文件里修修补补然后闭源（像 MIT）。我只要我的那部分永远是开源的。”

<LinkBox
    url="https://www.mozilla.org/en-US/MPL/2.0/"
    title="MPL 2.0许可证"
    subtitle="MPL 2.0内容"
/>


## 三步选协议法

每次创建项目时，可以按以下顺序判断：

1. **是否优先考虑传播和使用率？**
   → 是：

   * 有专利或企业合作需求 → Apache 2.0
   * 否 → MIT

2. **是否希望所有修改都必须开源？**
   → 是：

   * Web / SaaS 项目 → AGPL v3
   * 传统软件 → GPL v3

3. **是否希望被商业软件使用，但控制开源范围？**
   → 是：

   * 库 / SDK → LGPL
   * 模块化工程 → MPL 2.0

---

## 实操建议

1. **必须提供完整 LICENSE 文件**
   不要只写协议名称，应包含完整文本（可直接复制官方版本）。

2. **检查依赖的许可证兼容性**

   * MIT：基本兼容所有协议
   * Apache 2.0：不兼容 GPL v2
   * GPL：会影响整个项目的许可证选择

3. **明确版权归属（建议）**
   在 README 或源码头部标注作者与年份，有助于法律明确性。

[^notice]:这个文件通常放在项目根目录，主要用于声明第三方软件的版权归属。
