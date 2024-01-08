import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "MyBricks 文档中心",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.mybricks.world",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mybricks", // Usually your GitHub org/user name.
  projectName: "MyBricks", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/mybricks/docs/tree/main/",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/mybricks/docs/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "MyBricks 文档中心",
      logo: {
        alt: "MyBricks低代码",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "文档",
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'componentsSidebar',
        //   position: 'left',
        //   label: '组件库',
        // },
        {
          type: "docSidebar",
          sidebarId: "trainingSidebar",
          position: "left",
          label: "课程",
        },
        { to: "/blog", label: "博客", position: "left" },
        // {
        //   href: 'https://github.com/mybricks',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      logo: {
        alt: "MyBricks低代码",
        src: "img/logo.png",
        width: 50,
        height: 50,
      },
      copyright: `Copyright © ${new Date().getFullYear()} MyBricks.`,
      links: [
        {
          title: "产品",
          items: [
            {
              label: "MyBricks-SPA 低代码引擎",
              href: "https://mybricks.world",
            },
            {
              label: "VsCode插件",
              href: "https://marketplace.visualstudio.com/items?itemName=Mybricks.Mybricks&ssr=false#overview",
            },
          ],
        },
        {
          title: "文档",
          items: [
            {
              label: "快速开始",
              to: "docs/category/quick-start",
            },
          ],
        },
        {
          title: "链接",
          items: [
            {
              label: "Github",
              href: "https://github.com/mybricks",
            },
            // {
            //   html: `
            //       <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
            //         <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
            //       </a>
            //     `,
            // },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: {
      maxHeadingLevel: 5, // 最大展示标题到h5
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    format: "detect", // 识别md和mdx后缀自动编译，md会走普通md编译，只有mdx才会走mdx编译
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

export default config;
