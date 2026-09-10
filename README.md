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

## 部署到 Cloudflare

站点托管在 Cloudflare Workers Static Assets 上。Cloudflare 已经把 Pages 并入 Workers，新项目一律走 Workers，`wrangler pages project create` 现在只会转发过去，所以这里直接用 Workers。对纯静态站来说两者体验一样：全球 CDN、免费额度、自动 HTTPS、不需要 ICP 备案。

第一次部署：

```bash
npx wrangler login          # 浏览器里授权一次，之后不用再登
npm run deploy              # 构建 + 上传 dist/
```

以后每次改完内容，跑一遍 `npm run deploy` 就上线了。

当前线上地址：<https://personal-homepage.xzqzllyk.workers.dev>

`public/_headers` 里的安全响应头和静态资源长缓存会被 Workers 自动读取，不需要额外配置。

## 绑定你的域名

域名的 DNS 已经在 Cloudflare，所以不需要手动加解析记录：

1. Cloudflare 控制台 → **Workers & Pages** → 选中 `personal-homepage`。
2. **Settings** → **Domains & Routes** → **Add** → **Custom domain**。
3. 填你的域名。根域名填 `example.com`，二级域名填 `me.example.com` 都可以。
4. 点确认。Cloudflare 会自动加好 DNS 记录并签发证书。

证书通常几分钟内生效，最长等 15 分钟。生效前访问可能报 SSL 错误，属正常现象。

想让根域名和 `www` 都能访问，就把两个都添加一遍。

## 不在范围内

登录、数据库、评论留言、发布后台、博客系统、求职简历页。求职版本按设计文档的规划是另开一个独立入口，不改这一页的性格表达。
