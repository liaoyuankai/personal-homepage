// ============================================================
// 这个文件是整站唯一需要你手动编辑的地方。
// 改这里的文字 → 页面就变。不用碰其他文件。
// ============================================================

export type Interest = {
  id: string;
  label: string;
  description: string;
};

export type Activity = {
  date: string;
  category: string;
  title: string;
  summary: string;
};

export type RoleCard = {
  name: string;
  faction: string;
  quote: string;
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
  { date: '09.08', category: 'MUSIC', title: '本周循环', summary: '一首适合夜路和回忆的歌。' },
  { date: '09.06', category: 'MYSTERY', title: '刚结束的本', summary: '这次拿到的角色很会演。' },
  { date: '09.03', category: 'LIFE', title: '实习碎片', summary: '学到一个让人眼前一亮的小技巧。' },
];

// —— 03 小宇宙 ——————————————————————————————
export const playlistBlurb = '适合深夜散步和一点点微醺。';
// TODO: 换成你自己的歌单链接；留空字符串则整个按钮不显示
export const playlistLinks: ExternalLink[] = [
  { label: '网易云歌单', href: 'https://music.163.com' },
];

export const roleCards: RoleCard[] = [
  { name: '嘴硬心软的那个', faction: '好人阵营', quote: '我喜欢有秘密但不害人的角色。' },
  { name: '演技型凶手', faction: '凶手阵营', quote: '骗过所有人的那一轮最上头。' },
];

// —— 04 打招呼 ——————————————————————————————
export const contactHeadline = '想约我唱歌、喝一杯，或者聊点好玩的？来找我。';
// TODO: 换成你真实的联系方式；href 留空的条目不会渲染
export const contactLinks: ContactLink[] = [
  { label: '发封邮件', href: 'mailto:hello@example.com' },
];
