import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  '/': [
    '',
    {
      text: '文章',
      icon: 'material-symbols:article',
      collapsible: true,
      expanded: true,
      prefix: 'articles/',
      children: [
        {
          text: '生活',
          icon: 'lucide:wheat',
          collapsible: true,
          expanded: false,
          prefix: 'life/',
          children: 'structure',
        },
        {
          text: '学习',
          icon: 'mdi:pencil',
          collapsible: true,
          expanded: false,
          prefix: 'study/',
          children: 'structure',
        },
        {
          text: '开发',
          icon: 'laptop-code',
          collapsible: true,
          expanded: false,
          prefix: 'dev/',
          children: 'structure',
        },
        {
          text: '教程',
          icon: 'ic:baseline-key',
          collapsible: true,
          expanded: false,
          prefix: 'tutorial/',
          children: 'structure',
        },
        {
          text: '其他',
          icon: 'ic:baseline-category',
          collapsible: true,
          expanded: false,
          prefix: 'others/',
          children: 'structure',
        },
      ],
    },
    'intro',
    {
      text: '项目链接',
      icon: 'ix:project-history',
      collapsible: true,
      expanded: false,
      prefix: 'projects/',
      children: [
        {
          text: '印刷登记工具',
          icon: 'ix:project',
          link: 'https://github.com/Skrepy0/Print-Registration-System',
        },
        {
          text: 'md→pdf转换工具',
          icon: 'ix:project',
          link: 'https://github.com/Skrepy0/md-to-pdf-tool',
        },
        {
          text: 'PhyPlot',
          icon: 'ix:project',
          link: 'https://github.com/Skrepy0/PhyPlot',
        },
        {
          text: 'HNU大一期末大作业',
          icon: 'ix:project',
          link: 'https://github.com/Skrepy0/Dormitory-Management-System',
        },
        {
          text: 'Minecraft Mods',
          icon: 'arcticons:minecraft',
          collapsible: true,
          expanded: false,
          prefix: 'mcmods/',
          children: [
            {
              text: 'Random Enchant',
              icon: 'ix:project',
              link: 'https://github.com/Skrepy0/Random-Enchant-Neoforge',
            },
            {
              text: 'Grapnel',
              icon: 'ix:project',
              link: 'https://github.com/Skrepy0/Grapnel-Neoforge',
            },
            {
              text: 'Level Fix',
              icon: 'ix:project',
              link: 'https://github.com/Skrepy0/LevelFix-Neoforge',
            },
          ],
        },
      ],
    },
  ],
})
