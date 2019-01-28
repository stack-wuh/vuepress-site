const config = require('./config/config')

module.exports = {
  port: '20010',

  title: config.title,
  base: '/vuepress-site/dist/',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Vue',
        link: '/guide/'
      },
      {
        text: 'About',
        link: '/blog/one'
      },
    ],
    sidebar: {
      '/blog/': [
        '',
        'one',
        'two'
      ]
    },
  }

}
