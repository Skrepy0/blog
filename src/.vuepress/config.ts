import { defineUserConfig, Page } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { markdownMathPlugin } from "@vuepress/plugin-markdown-math";
const __dirname = import.meta.dirname || getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "SkrepyのBlog",
  description: "SkrepyのBlog",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  plugins: [
    markdownMathPlugin({
      type: "katex", // 使用 KaTeX 渲染，也可以选择 'mathjax'
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Ctrl+K搜索",
        },
      },
      hotKeys: [
        {
          key: "k",
          ctrl: true,
        },
      ],
      maxSuggestions: 10,
    }),
  ],
});
