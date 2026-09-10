import type { ExternalLink, RoleCard } from '../data/profile';

export default function UniverseSection({
  blurb,
  playlistLinks,
  roleCards,
}: {
  blurb: string;
  playlistLinks: ExternalLink[];
  roleCards: RoleCard[];
}) {
  const usableLinks = playlistLinks.filter((link) => link.href.trim() !== '');

  return (
    <section id="universe">
      <p className="eyebrow">03 / 小宇宙</p>
      <h2>歌单和角色卡</h2>
      <div className="cards">
        <article>
          <h3>歌单</h3>
          <p>{blurb}</p>
          {usableLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label} ↗
            </a>
          ))}
        </article>
        {roleCards.map((role) => (
          <article data-testid="role-card" key={role.name}>
            <small>{role.faction}</small>
            <h3>{role.name}</h3>
            <p>“{role.quote}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}
