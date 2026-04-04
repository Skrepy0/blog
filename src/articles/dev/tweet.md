---
title: 吐槽Search
icon: streamline-freehand:customer-action-complaint
date: 2026-04-05
excerpt: 被迫向slimsearch和vercel妥协
category:
  - 开发
tag:
  - 吐槽
---
# 在 Vercel 部署后，SlimSearch 搜索功能异常 / 报错
在本站开发过程中，开始我尝试使用SlimSearch实现文章的搜索功能。虽然SlimSearch可以在本地起作用，但是在Vercel部署后，控制台报错:
```log
/slimsearch.worker.js:1 Uncaught SyntaxError: Cannot use import statement outside a module
```
这个错误表现为输入关键词一直显示搜索中，
后来尝试配置vercel.json、禁用worker、使用本地worker.js替换都没结果，最后只能使用plugin-search实现搜索功能，所以!!本站的搜索功能比较拉!!。