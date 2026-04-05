import { defineUserConfig, Page } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from "@vuepress/bundler-vite";
import { getDirname, path } from "vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
const __dirname = import.meta.dirname || getDirname(import.meta.url);
export default defineUserConfig({
  head: [
    // 添加 Algolia 站点验证 meta 标签
    [
      "meta",
      { name: "algolia-site-verification", content: "E10BC9E7938E90E4" },
    ],
  ],
  base: "/",
  bundler: viteBundler(),
  lang: "zh-CN",
  title: "SkrepyのBlog",
  description: "SkrepyのBlog",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    docsearchPlugin({
      appId: "GQE9MZF01H",
      apiKey: "2de6d377359bc296cc455a5d3b7d6c57",
      indexName: "blog-prod-crawler",
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
            },
          },
        },
      },
    }),
  ],
});
