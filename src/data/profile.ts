// ============================================================
// 这个文件是整站唯一需要你手动编辑的地方。
// 改这里的文字 → 页面就变。不用碰其他文件。
// ============================================================

export type Interest = {
  id: string;
  label: string;
  description: string;
};

// 卡片配色按内容性质给，不按它排在第几个。
// plain 是低调的白底细框，其余三种是重点卡：粗框 + 硬阴影。
export type Tone = 'plain' | 'lavender' | 'pink' | 'lime';

export type Activity = {
  date: string;
  category: string;
  title: string;
  summary: string;
  tone?: Tone;
};

export type RoleCard = {
  name: string;
  faction: string;
  quote: string;
  tone?: Tone;
};

export type ExternalLink = {
  label: string;
  href: string;
};

export type ContactLink = ExternalLink;

// —— 站点身份 ——————————————————————————————
// TODO: 换成你自己的名字 / 代号
export const siteName = 'YOUR.NAME';
export const heroEyebrow = 'PERSONAL FILE / 2026';
export const identityLine = '计算机研二 / 实习中 / 歌房麦霸 / 剧本杀玩家';
export const heroCardFacts = ['hair: bold', 'mood: open', 'weekend: mystery'];
export const heroCardTagline = 'NOT JUST A DEV.';

// TODO: 拿到照片后填这里，档案卡会自动从占位色卡换成照片。
// 把图片放进 public/，然后写 { src: '/me.jpg', alt: '一句话描述这张照片' }
export const heroPhoto: { src: string; alt: string } | null = null;

// 没有照片时档案卡显示的染发色卡，对应设计文档里的“染发主题视觉卡”。
export const heroCardSwatches = ['#ff477e', '#caff1b', '#d8d7ff', '#171717'];

// —— 01 我的档案 ————————————————————————————
export const interests: Interest[] = [
  { id: 'singing', label: '唱歌', description: '从 KTV 到耳机里循环的歌，我都很认真。' },
  { id: 'drinks', label: '微醺聊天', description: '更喜欢微醺时有趣又坦诚的聊天。' },
  { id: 'murder-mystery', label: '剧本杀', description: '最爱把自己塞进陌生角色。' },
  { id: 'hair', label: '染发', description: '头发是情绪的调色盘。' },
  { id: 'coding', label: '写代码', description: '白天解决问题，晚上保持好奇。' },
];

// —— 02 最近在活 ————————————————————————————
export const activities: Activity[] = [
  { date: '09.08', category: 'MUSIC', title: '本周循环', summary: '一首适合夜路和回忆的歌。', tone: 'lavender' },
  { date: '09.06', category: 'MYSTERY', title: '刚结束的本', summary: '这次拿到的角色很会演。', tone: 'plain' },
  { date: '09.03', category: 'LIFE', title: '实习碎片', summary: '学到一个让人眼前一亮的小技巧。', tone: 'lime' },
];

// —— 03 小宇宙 ——————————————————————————————
export const playlistBlurb = '适合深夜散步和一点点微醺。';
// TODO: 换成你自己的歌单链接；留空字符串则整个按钮不显示
export const playlistLinks: ExternalLink[] = [
  { label: '网易云歌单', href: 'https://music.163.com' },
];

export const roleCards: RoleCard[] = [
  { name: '嘴硬心软的那个', faction: '好人阵营', quote: '我喜欢有秘密但不害人的角色。', tone: 'plain' },
  { name: '演技型凶手', faction: '凶手阵营', quote: '骗过所有人的那一轮最上头。', tone: 'pink' },
];

// —— 04 打招呼 ——————————————————————————————
export const contactHeadline = '想约我唱歌、喝一杯，或者聊点好玩的？来找我。';
// TODO: 换成你真实的联系方式；href 留空的条目不会渲染
export const contactLinks: ContactLink[] = [
  { label: '发封邮件', href: 'mailto:hello@example.com' },
];
