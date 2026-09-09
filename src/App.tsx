import { useState } from 'react';
import './styles.css';
const interests=[['唱歌','从 KTV 到耳机里循环的歌，我都很认真。'],['喝酒','更喜欢微醺时有趣又坦诚的聊天。'],['剧本杀','最爱把自己塞进陌生角色。'],['染发','头发是情绪的调色盘。'],['写代码','白天解决问题，晚上保持好奇。']];
const activities=[['09.08','MUSIC','本周循环','一首适合夜路和回忆的歌。'],['09.06','MYSTERY','刚结束的本','这次拿到的角色很会演。'],['09.03','LIFE','实习碎片','学到一个让人眼前一亮的小技巧。']];
export default function App() {
  const [active,setActive]=useState(0);
  return (
    <main>
      <nav aria-label="主页导航"><b>YOUR.NAME</b><span><a href="#archive">档案</a><a href="#now">现在</a><a href="#contact">打招呼</a></span></nav>
      <section className="hero">
        <p className="eyebrow">PERSONAL FILE / 2026</p>
        <h1>A little<br/><i>chaotic.</i><br/>Very alive.</h1>
        <p>计算机研二 / 实习中 / 歌房麦霸 / 剧本杀玩家</p>
        <a className="button" href="#archive">进入我的小宇宙 ↗</a>
      </section>
      <section id="archive"><p className="eyebrow">01 / 我的档案</p><h2>我不止一种打开方式。</h2><div className="tags">{interests.map(([n],i)=><button aria-pressed={i===active} onClick={()=>setActive(i)} key={n}>{n}</button>)}</div><p className="description">{interests[active][0]}说明：{interests[active][1]}</p></section>
      <section id="now"><p className="eyebrow">02 / 最近在活</p><h2>最近的小宇宙</h2><div className="cards">{activities.map(a=><article data-testid="activity-card" key={a[0]}><small>{a[0]} · {a[1]}</small><h3>{a[2]}</h3><p>{a[3]}</p></article>)}</div></section>
      <section><p className="eyebrow">03 / 小宇宙</p><div className="cards"><article><h2>歌单</h2><p>适合深夜散步和一点点微醺。</p><a href="https://music.163.com" target="_blank" rel="noreferrer">打开歌单 ↗</a></article><article><h2>剧本杀角色卡</h2><p>我喜欢嘴硬心软、有秘密的人。</p></article></div></section>
      <footer id="contact"><p className="eyebrow">04 / SAY HI</p><h2>想约我唱歌、喝一杯，或者聊点好玩的？来找我。</h2><a className="button" href="mailto:hello@example.com">发封邮件 ↗</a></footer>
    </main>
  );
}
