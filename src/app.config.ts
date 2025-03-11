export default {
  pages: ['pages/home/index', 'pages/mine/index', 'pages/notes/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#9b9b9b',
    selectedColor: '#f5a623',
    list: [
      {
        text: '首页',
        pagePath: 'pages/home/index',
        iconPath: 'images/tabBar/home.png',
        selectedIconPath: 'images/tabBar/home_active.png',
      },
      {
        text: '笔记',
        pagePath: 'pages/notes/index',
        iconPath: 'images/tabBar/note.png',
        selectedIconPath: 'images/tabBar/note_active.png',
      },
      {
        text: '我的',
        pagePath: 'pages/mine/index',
        iconPath: 'images/tabBar/mine.png',
        selectedIconPath: 'images/tabBar/mine_active.png',
      },
    ],
  },
  subPackages: [
    {
      root: 'notes',
      name: 'notes',
      pages: ['pages/detail/index'],
      independent: true,
    },
    {
      root: 'todos',
      name: 'todos',
      pages: ['pages/index/index'],
      independent: true,
    },
  ],
};
