import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    {
      text: "文章",
      icon: "book",
      prefix: "articles/",
      link: "articles/",
      children: "structure",
    },
    "intro",
    {
      text: "项目链接",
      icon: "ix:project-history",
      collapsible: true,
      expanded: true,
      prefix: "projects/",
      children: [
        {
          text: "HNU大一期末大作业",
          icon: "ix:project",
          link: "https://github.com/Skrepy0/Dormitory-Management-System",
        },
      ],
    },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
