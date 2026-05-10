export default {
  pages: ['pages/home/index', 'pages/notes/index', 'pages/mine/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Let Us Think',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#1890ff',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        text: 'home',
        pagePath: 'pages/home/index',
        iconPath: 'images/tabBar/home.png',
        selectedIconPath: 'images/tabBar/home_active.png',
      },
      {
        text: 'notes',
        pagePath: 'pages/notes/index',
        iconPath: 'images/tabBar/note.png',
        selectedIconPath: 'images/tabBar/note_active.png',
      },
      {
        text: 'mine',
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
    {
      root: 'gifts',
      name: 'gifts',
      pages: ['pages/index/index'],
      independent: true,
    },
  ],
};
