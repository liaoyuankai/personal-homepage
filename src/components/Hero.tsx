import {
  heroCardFacts,
  heroCardSwatches,
  heroCardTagline,
  heroEyebrow,
  heroPhoto,
  identityLine,
} from '../data/profile';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{heroEyebrow}</p>
        <h1 lang="en">
          A little
          <br />
          <i>chaotic.</i>
          <br />
          Very alive.
        </h1>
        <p className="identity">{identityLine}</p>
        <a className="button button--primary" href="#universe">
          进入我的小宇宙 ↗
        </a>
      </div>

      <aside className="profile-card" aria-label="个人档案卡">
        <small className="meta meta--on-pink">PERSONAL FILE</small>

        {heroPhoto ? (
          <img className="profile-card__photo" src={heroPhoto.src} alt={heroPhoto.alt} />
        ) : (
          <div className="profile-card__placeholder" aria-hidden="true">
            <div className="swatches">
              {heroCardSwatches.map((color) => (
                <span key={color} style={{ background: color }} />
              ))}
            </div>
            <div className="star">✦</div>
          </div>
        )}

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
