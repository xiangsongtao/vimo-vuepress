module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'VimoDocs',
      description: 'Vimo - 移动端Vue组件库说明文档'
    },
    '/en/': {
      lang: 'en-US',
      title: 'VimoDocs',
      description: 'Vimo - Mobile Vue component library documentation'
    }
  },
  head: [
    ['link', {rel: 'icon', href: `/logo.png`}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png`}],
    ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
    ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
    ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
  ],
  serviceWorker: true,
  evergreen: true,
  themeConfig: {
    repo: 'xx/xx', // github地址
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: '组件',
            link: '/components/'
          },
          {
            text: '配置',
            link: '/config/'
          },
          {
            text: '默认主题',
            link: '/default-theme-config/'
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('指南'),
          '/components/': [
            {
              title: '组件',
              collapsable: false,
              children: [
                ''
              ]
            },
            {
              title: '布局',
              collapsable: false,
              children: [
                'app',
                'page',
                'content',
                'grid'
              ]
            }
          ]
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/en/guide/'
          },
          {
            text: 'Config Reference',
            link: '/en/config/'
          },
          {
            text: 'Default Theme Config',
            link: '/en/default-theme-config/'
          }
        ],
        sidebar: {
          '/en/guide/': genSidebarConfig('Guide')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n'
      ]
    }
  ]
}
