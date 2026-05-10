# Let Us Think

一个基于 Taro + Vue 3 的多端应用，支持待办事项管理、笔记记录、喜帖随礼录入等功能，可编译为微信小程序、H5 等多端。

## 技术栈

| 技术 | 版本 |
|------|------|
| [Taro](https://taro-docs.jd.com/) | 4.0.9 |
| Vue | 3.3+ |
| TypeScript | 5.1+ |
| [NutUI Taro](https://nutui.jd.com/taro/) | 4.2.8 |
| Less | — |
| Webpack | 5.78 |

## 功能模块

- **待办事项** — 添加、完成、管理日常待办
- **笔记** — 创建和编辑富文本笔记
- **喜帖随礼录入** — 记录随礼人员、金额与日期，自动汇总并以中文大写金额展示合计
- **我的** — 个人信息与设置

## 项目结构

```
src/
├── pages/
│   ├── home/        # 首页（TabBar）
│   ├── notes/       # 笔记列表（TabBar）
│   └── mine/        # 我的（TabBar）
├── todos/           # 待办分包
│   └── pages/index/
├── notes/           # 笔记分包
│   └── pages/detail/
├── gifts/           # 喜帖随礼分包
│   └── pages/index/
└── components/      # 公共组件
```

## 快速开始

```bash
# 安装依赖
pnpm install

# 微信小程序开发
pnpm dev:weapp

# H5 开发
pnpm dev:h5
```

编译产物在 `dist/` 目录，微信小程序请用微信开发者工具打开该目录。

## 构建

```bash
# 微信小程序
pnpm build:weapp

# H5
pnpm build:h5

# 支付宝小程序
pnpm build:alipay

# 字节跳动小程序
pnpm build:tt
```

## License

MIT
