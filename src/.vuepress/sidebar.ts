import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    {
      text: "文章",
      icon: "book",
      collapsible: true,
      expanded: true,
      prefix: "articles/",
      link: "articles/",
      children: "structure",
    },
    "intro",
    {
      text: "项目链接",
      icon: "ix:project-history",
      collapsible: true,
      expanded: false,
      prefix: "projects/",
      children: [
        {
          text: "印刷登记工具",
          icon: "ix:project",
          link: "https://github.com/Skrepy0/Print-Registration-System",
        },
        {
          text: "PhyPlot",
          icon: "ix:project",
          link: "https://github.com/Skrepy0/PhyPlot",
        },
        {
          text: "HNU大一期末大作业",
          icon: "ix:project",
          link: "https://github.com/Skrepy0/Dormitory-Management-System",
        },
        {
          text: "Minecraft Mods",
          icon: "arcticons:minecraft",
          collapsible: true,
          expanded: false,
          prefix: "mcmods/",
          children: [
            {
              text: "Random Enchant",
              icon: "ix:project",
              link: "https://github.com/Skrepy0/Random-Enchant-Neoforge",
            },
            {
              text: "Grapnel",
              icon: "ix:project",
              link: "https://github.com/Skrepy0/Grapnel-Neoforge",
            },
            {
              text: "Level Fix",
              icon: "ix:project",
              link: "https://github.com/Skrepy0/LevelFix-Neoforge",
            },
          ],
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
