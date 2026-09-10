import {
  heroCardFacts,
  heroCardTagline,
  heroEyebrow,
  identityLine,
} from '../data/profile';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{heroEyebrow}</p>
        <h1>
          A little
          <br />
          <i>chaotic.</i>
          <br />
          Very alive.
        </h1>
        <p className="identity">{identityLine}</p>
        <a className="button" href="#archive">
          进入我的小宇宙 ↗
        </a>
      </div>
      <aside className="profile-card" aria-label="个人档案卡">
        <small>PERSONAL FILE</small>
        <div className="star" aria-hidden="true">
          ✦
        </div>
        <p className="facts">
          {heroCardFacts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </p>
        <b>{heroCardTagline}</b>
      </aside>
    </section>
  );
}
