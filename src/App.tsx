import './styles.css';
import ContactSection from './components/ContactSection';
import Hero from './components/Hero';
import InterestArchive from './components/InterestArchive';
import NowSection from './components/NowSection';
import UniverseSection from './components/UniverseSection';
import {
  activities,
  contactHeadline,
  contactLinks,
  interests,
  playlistBlurb,
  playlistLinks,
  roleCards,
  siteName,
} from './data/profile';

export default function App() {
  return (
    <main>
      <nav aria-label="主页导航">
        <b>{siteName}</b>
        <span>
          <a href="#archive">档案</a>
          <a href="#now">现在</a>
          <a href="#contact">打招呼</a>
        </span>
      </nav>
      <Hero />
      <InterestArchive interests={interests} />
      <NowSection activities={activities} />
      <UniverseSection
        blurb={playlistBlurb}
        playlistLinks={playlistLinks}
        roleCards={roleCards}
      />
      <ContactSection headline={contactHeadline} links={contactLinks} />
    </main>
  );
}
