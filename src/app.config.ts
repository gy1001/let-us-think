export default defineAppConfig({
  pages: ['pages/index/index', 'pages/log/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/log/index',
        text: '日志',
      },
    ],
  },
  subpackages: [
    {
      root: 'rate',
      pages: ['pages/rate/index'],
    },
  ],
})
