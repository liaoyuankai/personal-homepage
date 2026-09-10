# 个人主页 · 怪趣档案馆

一个手机优先的单页个人主页。Vite + React + TypeScript，纯静态，无后端、无数据库、无登录。

设计与验收标准见 `docs/superpowers/specs/2026-09-08-personal-homepage-design.md`。

## 改内容

**所有文字都在 `src/data/profile.ts` 一个文件里。** 改那里就行，不用碰组件。

| 想改的东西 | 改哪个导出 |
| --- | --- |
| 左上角的名字 | `siteName`（同时改 `index.html` 的 `<title>` 和 og 标签） |
| 首屏身份那行字 | `identityLine` |
| 首屏粉色卡片上的三行 | `heroCardFacts`、`heroCardTagline` |
| 五个兴趣标签和说明 | `interests` |
| 最近在活的卡片 | `activities` |
| 歌单链接 | `playlistLinks` |
| 剧本杀角色卡 | `roleCards` |
| 联系方式 | `contactLinks` |

`playlistLinks` 和 `contactLinks` 里 `href` 为空的条目不会渲染，所以不想放的链接直接留空字符串，页面上不会出现空按钮。

文件里带 `TODO` 注释的三处是必须替换成你自己信息的地方。

## 本地开发

```bash
npm install
npm run dev          # http://localhost:5173
npm run test         # 组件测试（vitest）
npm run test:e2e     # 浏览器测试，手机和桌面两种视口
npm run build        # 产出 dist/
```

浏览器测试用系统已装的 Chrome，第一次跑如果报找不到浏览器，执行 `npx playwright install chrome`。

## 部署到 Cloudflare Pages

第一次部署：

```bash
npx wrangler login          # 浏览器里授权一次，之后不用再登
npm run deploy              # 构建 + 上传 dist/
```

首次执行 `npm run deploy` 时 wrangler 会问要不要新建一个 Pages 项目，选新建，项目名用 `personal-homepage`。上传完会给你一个 `xxx.pages.dev` 的临时地址，先打开确认页面没问题。

以后每次改完内容，跑一遍 `npm run deploy` 就上线了。

## 绑定你的域名

域名的 DNS 已经在 Cloudflare，所以这步最省事，不需要手动加解析记录：

1. Cloudflare 控制台 → **Workers & Pages** → 选中 `personal-homepage` 项目。
2. 打开 **Custom domains** 标签 → **Set up a custom domain**。
3. 填你的域名。根域名填 `example.com`，二级域名填 `me.example.com` 都可以。
4. 点确认。Cloudflare 会自动加好 CNAME 记录并签发证书。

证书通常几分钟内生效，最长等 15 分钟。生效前访问可能报 SSL 错误，属正常现象。

想让根域名和 `www` 都能访问，就把两个都添加一遍。

这条路径不需要 ICP 备案，因为站点不落在中国大陆的服务器上。

## 不在范围内

登录、数据库、评论留言、发布后台、博客系统、求职简历页。求职版本按设计文档的规划是另开一个独立入口，不改这一页的性格表达。
