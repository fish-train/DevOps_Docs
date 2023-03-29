// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Проект для ИПР',
  tagline: 'DevOps, CI/CD, Infrastructure-as-Code, Configuration-as-Code',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PFLB', // Usually your GitHub org/user name.
  projectName: 'Docusaurus_DevOps', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // routeBasePath: '/', // Serve the docs at the site's root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog:  false, // Optional: disable the blog plugin
          //showReadingTime: false, // Показать время на чтение
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
      [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'https://redocly.github.io/redoc/openapi.yaml',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],
  ],
// ...
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
        indexDocs: true,
        indexBlog: false,
        indexDocSidebarParentCategories: 2,
        language: ["ru", "en"]
      },
    ],
  ],


// Настройки поиска easyops-cn ===========================================

//themes: [
   // ... Your other themes.
//   [
//     require.resolve("@easyops-cn/docusaurus-search-local"),
//     /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
//     ({
//      //  ... Your options.
//       // `hashed` is recommended as long-term-cache of index file is possible.
//       hashed: true,
//       language: ["en", "ru"],
//     }),
//   ],
// ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_light.png',
          srcDark: 'img/logo_dark.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'ИПР',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          /*{
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },*/
          {
            //type: 'doc',
            //docId: 'intro',
            position: 'left',
            to: '/api',
            label: 'Пример API',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://confluence.pflb.ru/pages/viewpage.action?pageId=37618817',
            position: 'right',
            label: 'Confluence',
            //className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        /*links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} Проект для ИПР Мокрушина А.И.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;