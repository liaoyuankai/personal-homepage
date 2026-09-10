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
        <article data-tone="plain">
          <small className="meta">PLAYLIST</small>
          <h3>歌单</h3>
          <p>{blurb}</p>
          {usableLinks.map((link) => (
            <a
              className="button button--ghost"
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
        </article>
        {roleCards.map((role) => (
          <article data-testid="role-card" data-tone={role.tone ?? 'plain'} key={role.name}>
            <small className="meta">{role.faction}</small>
            <h3>{role.name}</h3>
            <p className="quote">“{role.quote}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}
