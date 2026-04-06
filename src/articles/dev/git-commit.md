---
title: Commit规范学习
icon: material-symbols:commit
date: 2026-04-06
excerpt: 学习git commit 规范
category:
  - 开发
  - 学习
tag:
  - Git
---

## 第一部分：为什么需要 Commit 规范？

- **快速定位变更**：一眼看出是修 Bug、加功能还是重构  
- **自动化工具支持**：生成 `CHANGELOG.md`、自动语义化版本号  
- **团队协作友好**：`git log` 清晰可读，代码审查更高效  
- **与项目管理联动**：自动关闭 Issue，追溯需求/缺陷  

---

## 第二部分：Conventional Commits（约定式提交）

### 基本格式
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

---

#### 格式拆解

1. `<type>`（类型，**必填**）
描述本次提交的**变更类别**，常用值有：  
`feat`（新功能）、`fix`（修复 Bug）、`docs`（文档）、`style`（格式）、`refactor`（重构）、`test`（测试）、`chore`（构建/工具）等。

> 小写，一般现在时，例如 `feat` 而不是 `feature` 或 `Feat`。

2. `<scope>`（范围，可选）
说明本次提交影响的**模块、组件或文件范围**，放在括号内。  
例如：`(auth)`、`(api)`、`(README)`。  
省略时可不写括号。

3. `<subject>`（主题，**必填**）
对变更的**简短描述**：  
- 首字母小写  
- 不超过 50 个字符  
- 结尾不加句号  
- 使用一般现在时（如 `add` 而非 `added`）

4. 第一个空行
主题和正文之间**必须有一个空行**，否则 Git 会将后续内容也视为主题的一部分。

5. `<body>`（正文，可选）
详细说明**为什么改**以及**改了什么**（不是逐行代码描述）：  
- 每行不超过 72 字符  
- 可以分多行  
- 解释变更动机、与之前行为的差异等

6. 第二个空行
正文和脚注之间也需要一个空行（如果存在脚注的话）。

7. `<footer>`（脚注，可选）
用于**元信息**，常见用途：  
- 关联 Issue：`Closes #123`、`Fixes #456, #789`  
- 标记破坏性变更：`BREAKING CHANGE: 描述`  
- 其他元数据如 `Reviewed-by: ...`

---

#### 完整示例

```
feat(登录): 增加通过微信扫码登录的功能

实现微信 OAuth2 扫码登录流程。用户在登录页面可点击“微信登录”按钮，
使用微信扫码后自动完成登录或注册。新增后端接口 /auth/wechat。

Closes #123
```
##### 逐项解释

- **type** = `feat`（新功能）  
- **scope** = `登录`（影响的模块是“登录”）  
- **subject** = `增加通过微信扫码登录的功能`（简短描述，中文也可以，保持首行不超过 50 字符）  
- **空行**（第一行与正文之间）  
- **body** = 用中文详细说明实现了什么流程、新增了什么接口  
- **空行**（正文与脚注之间）  
- **footer** = `Closes #123`（关闭编号为 123 的 Issue）

---

## 为什么要有空行？

- Git 内部将**第一行**视为标题（subject），**空行之后**的内容视为描述（body/footer）。  
- 许多工具（`git log --oneline`、`git shortlog`、`git format-patch`）依赖这个空行来正确解析提交信息。  
- 没有空行会导致整个信息被当作标题，丢失详细信息。

---

## 快速记忆

> **标题行**（类型+范围+主题）  
> 空一行  
> **详细描述**（正文 + 空一行 + 脚注）

这个格式让提交信息**人机皆可读**：人类快速浏览标题，机器（changelog 生成器、版本管理工具）解析结构。

### 常用 Type 一览表

| Type       | 含义                     | 版本升级影响       |
|------------|--------------------------|-------------------|
| `feat`     | 新功能                   | **minor** (1.0.0→1.1.0) |
| `fix`      | 修复 Bug                 | **patch** (1.0.0→1.0.1) |
| `docs`     | 仅文档变更               | 无                |
| `style`    | 代码格式（空格、分号等） | 无                |
| `refactor` | 重构（非新功能非修 Bug） | 无                |
| `perf`     | 性能优化                 | patch             |
| `test`     | 添加或修改测试           | 无                |
| `chore`    | 构建过程、辅助工具变动   | 无                |
| `ci`       | CI 配置或脚本改动        | 无                |
| `revert`   | 回滚提交                 | 取决于被回滚内容  |

> **破坏性变更 (BREAKING CHANGE)**：  
> 在 type 后加 `!` 或在 footer 写 `BREAKING CHANGE: xxx`，版本升级为 **major** (1.0.0→2.0.0)。

### 编写规则

- **subject** 首字母小写，用一般现在时（`add` 而非 `added`）  
- **subject** 不超过 50 字符，结尾不加句号  
- **body** 每行不超过 72 字符，解释 **what & why**（不是 how）  
- **footer** 关闭 Issue：`Closes #123, #456`  

### 正确示例

```text
feat(login): add OAuth2 authentication

Implement GitHub OAuth2 flow. Users can now log in with their GitHub account.

Closes #89
```

```text
fix(api)!: rename userId to userID in response

BREAKING CHANGE: all clients must update to use 'userID' field.
```

---

## 第三部分：Gitmoji —— 让 Commit 更生动 🎨

### 什么是 Gitmoji？

[gitmoji](https://gitmoji.dev/) 是一个开源规范，**使用表情符号代替或补充传统的 type 标签**，让提交信息的意图一目了然，同时增加趣味性。

> 官网：https://gitmoji.dev/  
> GitHub：https://github.com/carloscuesta/gitmoji

### 核心思想

- 每个表情符号对应一种变更类型  
- 视觉辨识度高，快速扫描 `git log`  
- 保持语义化（和 Conventional Commits 兼容）  
- 可配合工具自动生成 changelog

### 常用 Gitmoji 列表

| 表情 | 代码          | 含义                       | 对应 Conventional Type |
|------|---------------|----------------------------|------------------------|
| 🎨   | `:art:`       | 改进代码结构/格式          | `style` / `refactor`   |
| ⚡️  | `:zap:`       | 提升性能                   | `perf`                 |
| 🔥  | `:fire:`      | 删除代码或文件             | `chore`                |
| 🐛  | `:bug:`       | 修复 Bug                   | `fix`                  |
| 🚑️ | `:ambulance:` | 紧急修复                   | `fix` (critical)       |
| ✨   | `:sparkles:`  | 新功能                     | `feat`                 |
| 📝  | `:memo:`      | 文档更新                   | `docs`                 |
| 🚀  | `:rocket:`    | 部署相关                   | `ci` / `deploy`        |
| ✅   | `:white_check_mark:` | 测试添加/通过        | `test`                 |
| 🔒  | `:lock:`      | 修复安全问题               | `fix` (security)       |
| 🔖  | `:bookmark:`  | 打标签 / 版本号            | `chore`                |
| 🚧  | `:construction:` | 进行中（WIP）           | `chore`                |
| 💚  | `:green_heart:` | 修复 CI 构建问题         | `ci`                   |
| ⬆️  | `:arrow_up:`  | 升级依赖                   | `chore`                |
| ⬇️  | `:arrow_down:`| 降级依赖                   | `chore`                |
| 📌  | `:pushpin:`   | 锁定依赖版本               | `chore`                |
| 👷  | `:construction_worker:` | 添加/修改 CI 工作流 | `ci`                  |
| 📈  | `:chart_with_upwards_trend:` | 添加分析/追踪代码 | `feat`            |
| ♿️  | `:wheelchair:`| 无障碍优化                 | `feat`                 |
| 🐳  | `:whale:`     | Docker 相关                | `chore`                |
| 🍱  | `:bento:`     | 添加/更新资源文件          | `feat`                 |
| ♻️  | `:recycle:`   | 重构代码                   | `refactor`             |
| 🚚  | `:truck:`     | 移动/重命名文件            | `chore`                |

> 完整列表请访问 [gitmoji.dev](https://gitmoji.dev/)

### Gitmoji 使用格式

#### 方案一：完全替代 type
```text
:bug: fix user login null pointer
```
或者加上 scope：
```text
:sparkles: (auth) add JWT token refresh
```

#### 方案二：与 Conventional Commits 结合
```text
fix(api): :bug: handle null pointer in user service
feat: :sparkles: add OAuth2 login
docs: :memo: update README with setup guide
```

### Gitmoji 的优势

1. **视觉扫描快**：`git log --oneline` 里一眼看到 🐛 和 ✨  
2. **跨文化友好**：表情符号比英文单词更直观  
3. **增加团队趣味**：提高开发者遵守规范的意愿  
4. **工具生态**：  
   - [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli) – 交互式生成带 emoji 的 commit  
   - 各种 IDE 插件支持自动补全  

### 如何开始使用 Gitmoji？

1. 访问 [gitmoji.dev](https://gitmoji.dev/) 复制你需要的 emoji 代码  
2. 在 commit 信息中粘贴，例如 `git commit -m ":bug: fix crash when input is empty"`  
3. （可选）安装 `gitmoji-cli`：  
   ```bash
   npm install -g gitmoji-cli
   gitmoji -c   # 交互式提交
   ```

---

## 第四部分：工具链推荐

| 工具 | 作用 | 配合 Gitmoji？ |
|------|------|----------------|
| `commitizen` | 交互式生成规范 commit | ✅ 支持自定义模板 |
| `commitlint` | 校验 commit 信息格式 | ✅ 可配置 emoji 规则 |
| `standard-version` | 自动生成 changelog 和版本号 | ⚠️ 需要额外配置解析 emoji |
| `semantic-release` | 全自动版本发布 | ⚠️ 同上 |
| `gitmoji-cli` | 专门用于 gitmoji 提交 | ✅ 官方推荐 |

---

## 第五部分：团队落地建议

1. **统一规范**：选择 Conventional Commits 或 Gitmoji（或二者结合）  
2. **提供模板**：在 `.gitmessage` 中预设格式  
3. **CI 强制校验**：使用 `commitlint` + `husky`，不合规的 commit 禁止推送  
4. **文档化**：在 `CONTRIBUTING.md` 中写明规范示例  
5. **定期生成 changelog**：使用工具自动生成，提升成就感  

---